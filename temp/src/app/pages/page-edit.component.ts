import { Component, ViewChild, OnInit } from '@angular/core';
import {PageService} from './page.service';
import { MenuService } from '../menus/menu.service';
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
	selector: 'page-edit',
	templateUrl: './page-form.html'

})



export class PageEditComponent  implements OnInit{
	public pageForm: FormGroup;

	//public page: PageEdit = {};
	public id : number = 0;
	//public page: PageEdit;
	public pageObj: any = {};
	public langs: any = [];
    public isEdit: boolean = false;
	public positions: number[];
	public menuToSelect: any[];
	errorMessage: string;

	@ViewChild("fileInput") fileInput:any;


	constructor( private pageService: PageService, 

				private menuService: MenuService,
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

		this.pageForm = this.fb.group({
			published: false, 
			is_left_menu: false,
			is_intro_text: false,
			menus_id: ['' , Validators.required],
			translates: this.fb.array([
			]),
			contents: this.fb.array([
			])
		});

		this.menuService.getMenus().subscribe( menus => {

			this.menuToSelect = [];
			let ii=0;
			for( let i in menus  ){
				if( "1"  ===  menus[i].published ){
					this.menuToSelect[ii] = {};
					this.menuToSelect[ii].id = menus[i].id;
					this.menuToSelect[ii].menu_short_title = menus[i].menu_short_title;
					ii++;
				}
			}
		});


		this.pageService.getPageById( this.id ).subscribe(
			page => {

				this.pageObj = page;

				this.pageForm = this.fb.group({
					published:  ('1' ===  page.published) ? true : false,  
					is_left_menu:  ('1' ===  page.is_left_menu  ) ? true : false,  
					is_intro_text:  ('1' ===  page.is_intro_text ) ? true : false,  
					menus_id: [ page.menus_id,   Validators.required],
					translates: this.fb.array([
					]),
					contents: this.fb.array([
					])
				});

				let control = <FormArray>this.pageForm.controls['translates'];
				for (var translate in   page.translates ) {
					control.push( this.translateService.initTranslate( 
					  page.translates[translate].lang, 
					  page.translates[translate].type, 
					  page.translates[translate].value
					));
				}

				const controlC = <FormArray>this.pageForm.controls['contents'];
				for (var content in   page.contents ) {
					controlC.push( 
						this.fb.group({
							lang:  [ page.contents[content].lang, Validators.required],
							content: [  page.contents[content].content, Validators.required]
						})
					);
				}

			},
			error => {
				console.log( error );
			}
		);

	}


	addFile(): void {
		let fi = this.fileInput.nativeElement;
		if (fi.files && fi.files[0]) {
			let fileToUpload = fi.files[0];
			console.log( fileToUpload  );
			this.pageService
				.upload(fileToUpload)
				.subscribe(res => {
					console.log(res);
				});
		}	
	}
	

	log(val: any) { console.log(val); }

	onSubmit(f: NgForm) {

		let data =  this.translateService.transformObj( f.value, this.id );

		this.pageService.createPage( data ).
			subscribe(
				page  => {
					this.router.navigateByUrl('/page-list');
				}, 
				error => {
					this.errorMessage = <any>error;
					console.log( error );
				}
			);
	}

}
