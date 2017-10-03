import {Injectable} from '@angular/core';
import {Http,  Response ,  Headers, RequestOptions} from '@angular/http';
import { UserService } from '../users/user.service';
//import { Page } from './page';
//import { Router } from '@angular/router';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class PageService{

	private options : any;
	private apiUrlGetPages =  "http://cmsrs3admin.loc/api/pages/index";
	private apiUrlGetPage =  "http://cmsrs3admin.loc/api/pages/get";
	private apiUrlDelPage = "http://cmsrs3admin.loc/api/pages/delete"; 
	private apiUrlSavePage = "http://cmsrs3admin.loc/api/pages/save"; 
	private apiUrlImgUpload = "http://cmsrs3admin.loc/api/images/upload";


    constructor( private http: Http,  private userService: UserService ){

        let headers = new Headers({ 'Authorization': 'Bearer ' +  userService.getToken() });
		headers.append( 'Content-Type', 'application/json'  );
		//headers.append('Content-Type', 'multipart/form-data');
        let options = new RequestOptions({ headers: headers });

		//let headers = new Headers({ 'Content-Type': 'application/json' });
        //let options = new RequestOptions({ headers: headers });

		this.options = options;
    }

	getPages() : Observable<Response>  {
		let ret =  this.http.get( this.apiUrlGetPages, this.options  )
			.map(
				( res : Response )   => {
					//console.log(res.status);
					//console.log(res);
					return res.json().out;
				}
			);
		return ret;
	}


	getPageById( id : number ) : Observable<any>  {
		let ret =  this.http.get( this.apiUrlGetPage+'/'+id.toString(), this.options  )
			.map(
				( res : Response )   => {
					//console.log(res.status);
					//console.log(res);
					return res.json().out;
				}
			);
		return ret;
	}

	deletePage(id : number ) :  Observable<Response>  {
		let out = this.http.delete(  this.apiUrlDelPage+'/'+id.toString(), this.options );
		return out;
	}


    createPage(page : any) : Observable<Response> {
        return  this.http.post( this.apiUrlSavePage, page  , this.options );
						//.map(this.extractData)
						//.catch(this.handleError);
	}

	upload(fileToUpload: any) {
		let input = new FormData();
		input.append("file", fileToUpload);
		//input.append("file", fileToUpload.files[0]);
		input.append("pages_id", "1");


	    let headers = new Headers({ 'Authorization': 'Bearer ' + this.userService.getToken() });
		headers.append( 'Content-Type', 'application/json'  );
		headers.append('Content-Type', 'multipart/form-data');
        let options = new RequestOptions({ headers: headers });
	

		return this.http
			//.post( this.apiUrlImgUpload, fileToUpload  , this.options  );
			.post( this.apiUrlImgUpload, input, options );
	}

}
