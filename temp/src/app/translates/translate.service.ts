import {Injectable} from '@angular/core';
import {
	    FormBuilder,
	    Validators
} from '@angular/forms';

@Injectable()
export class  TranslateService{

    constructor( private fb: FormBuilder  ){}


	transformObj( data : any, id : number ){
		let out = {};

		data.id = id;
		out['data'] = data;

		return JSON.stringify( out );
	}

	initTranslate( lang: string, type: string, value: string ){
        return this.fb.group({
			lang:  [lang, Validators.required],
			type:  [type, Validators.required],
			value: [value, Validators.required]
        });
	}

}
