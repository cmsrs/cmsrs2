import { Translate } from '../translates/translate';

export class Page {
	id: number;  
	published: boolean;
	is_left_menu: boolean;
	is_intro_text: boolean;	
	is_deleted: boolean;
	menus_id: number;

	//position: number;
	translates: Translate[];
}
