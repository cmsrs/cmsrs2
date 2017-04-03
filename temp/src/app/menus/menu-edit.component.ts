import { Component, OnInit  } from '@angular/core';
import { MenuEdit } from './menu-edit';
import {MenuService} from './menu.service';
import {SharedService} from '../main/shared.service';
import { TranslateService } from  '../translates/translate.service';

import {
	    FormGroup,
		FormArray,
	    FormBuilder,
	    Validators,
	    FormControl
} from '@angular/forms';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'menu-edit',
	templateUrl: './menu-form.html'

})

export class MenuEditComponent  implements OnInit{
	public menuForm: FormGroup;

	//public menu: MenuEdit = {};
	public id : number = 0;
	public menu: MenuEdit;
	public menuObj: any = {};
	public langs: any = [];
    public isEdit: boolean = false;
	public positions: number[];
	errorMessage: string;


	constructor( private menuService: MenuService, 
				private translateService: TranslateService, 
				private router: Router,  
				private route: ActivatedRoute, 
				private sharedService: SharedService,
				private fb: FormBuilder	
			   ){
    }

	ngOnInit(){
		this.route.params.subscribe(params => {
			this.id = params['id'];
			this.isEdit =( 0 == this.id ) ? false : true;
		});

		this.menuForm = this.fb.group({
			published: false,  //['', Validators.required ], 
			position:  ['', Validators.required ], 
			translates: this.fb.array([
			])
		});


		this.menuService.getMenuById( this.id ).subscribe(
			menu => {
				this.menuObj = menu;
				//console.log(  menu  );
				this.positions = this.menuService.getPositions( menu.menus_count );

				this.menuForm = this.fb.group({
					published:  ('1' ===  menu.published) ? true : false,  
					//position: [ this.positions[menu.position], Validators.required ], 
					position: [ parseInt(menu.position), Validators.required ], 
					translates: this.fb.array([
					])
				});

				let control = <FormArray>this.menuForm.controls['translates'];
				for (var translate in   menu.translates ) {
					control.push( this.translateService.initTranslate( 
					  menu.translates[translate].lang, 
					  menu.translates[translate].type, //'menu_short_title', 
					  menu.translates[translate].value
					));
				}

			},
			error => {
				console.log( error );
			}
		);

	}
	

	log(val: any) { console.log(val); }

	onSubmit(f: NgForm) {

		let data =  this.translateService.transformObj( f.value, this.id );

		this.menuService.createMenu( data ).
			subscribe(
				menu  => {
					this.router.navigateByUrl('/menu-list');
				}, 
				error => {
					this.errorMessage = <any>error;
					console.log( error );
				}
			);				
	}

}
