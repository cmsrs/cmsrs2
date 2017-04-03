import { Component, OnInit } from '@angular/core';

import { PageService } from './page.service';
import { Page } from './page';

@Component({
  selector: 'page-list',
  template: `
<h2>Pages</h2>

<div class="panel panel-default row" ng-controller="menuListCtrl">

        <table class="table">

            <thead>
                <tr>
                    <th class="text-center">Id</th>
                    <th class="text-center">Name</th>
                    <th class="text-center">Published</th>
                    <th class="text-center">Menus_id</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let item of pages">
                    <td class="text-center">{{item.id}}</td>
                    <td class="text-center">{{item.page_short_title}}</td>
                    <td class="text-center">{{item.published}}</td>
                    <td class="text-center">{{item.menus_id}}</td>

					<td><a   [routerLink]="['/page-edit', item.id ]"  class="btn btn-small btn-primary">edit</a></td>
					<td><a (click)="deletePage(item.id)" class="btn btn-small btn-danger">delete</a></td>
                </tr>
            </tbody>

        </table>

        <div class="text-center">
            <a   [routerLink]="['/page-edit', '0']" class="btn btn-primary">add</a>
        </div>
</div>
  `,
})
export class  PageListComponent implements OnInit  { 
	pages: any;

    constructor( private pageService: PageService  ){
    }

	ngOnInit(){
		this.pageService.getPages().subscribe( pages => {
			this.pages = pages;
		});
	}

    deletePage( id: number ){
        this.pageService.deletePage(id).subscribe( del => {
            for( let i = 0; i < this.pages.length;i++ ){
                if( id == this.pages[i].id  ){
                    this.pages.splice(i, 1);
                }   
            }   
        }); 
    } 

}
