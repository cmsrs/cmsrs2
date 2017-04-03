<?php
 
namespace common\models;
 
//use yii\helpers\VarDumper;
use \yii\db\ActiveRecord;
class  Contents  extends ActiveRecord
{

	//const TRANSLATES_PREFIX = 'translates_';

    public static function tableName(){
        return 'contents';
    }


    public static  function transformArrFromDbToHtml( $arrDb ){
        $arrHtml = [];
        foreach( $arrDb as $arrItem  ){
            $arrHtml[$arrItem['lang']] = $arrItem['content'];
        }
        return $arrHtml;
    }

	/*
	public static function InitTranslateByType( $arrType = array() ){
		$arrDb = [];	
		$arrLangs = Translates::GetLangs();

		$i = 0;
		foreach(  $arrType as $type ){
			foreach( $arrLangs as $lang ){

				$arrDb[$i]['lang'] = $lang;
				$arrDb[$i]['type'] = $type;
				$arrDb[$i]['value'] = '';
				$i++;
			}
		}

		return $arrDb;
	}
	 */


	public static function InitContent(){
		$arrDb = [];	
		$arrLangs = Translates::GetLangs();

		$i = 0;
		foreach( $arrLangs as $lang ){

			$arrDb[$i]['lang'] = $lang;
			$arrDb[$i]['content'] = '';
			$i++;
		}

		return $arrDb;
	}

	


	/*
	public static function saveData(  $arrHtml, $arrFk, $arrObjT  ){

		if( empty( $arrObjT ) ){

			foreach( $arrHtml as $arrDb ){
				$arrDb = array_merge( $arrDb, $arrFk );
				$objTranslates = new Translates();
				$objTranslates->attributes = $arrDb;
				$objTranslates->save();
			}
		}else{

			//foreach( $arrObjT as $objT ){
			//	var_dump(  $objT->getAttribute('id')  );
			//}
			//die('==========');

			foreach( $arrHtml as $arrDb ){
				if( empty( $arrDb['lang'] ) ||  empty( $arrDb['type'] ) || !isSet( $arrDb['value'] ) ){
				//if( empty( $arrDb['id'] )  || !isSet( $arrDb['value'] ) ){
					throw new \Exception('x34878 no id or is not set value in date in - in edit');
				}
				$lang = $arrDb['lang'];
				$type = $arrDb['type'];
				$value = $arrDb['value'];

				foreach( $arrObjT as $objT ){
					//po id powienien byc ten warunrk - ale wtedy testy sie kompikuja - zakladam ze type jest rozne
					if( ($lang ==  $objT->getAttribute('lang')) && ( $type ==  $objT->getAttribute('type') ) ){
						$objT->setAttribute( 'value',  $value );
						$objT->save();
					}
				}
			}
		}

		return true;
	*/



	public static function saveData(  $arrHtml, $pageId, $arrObj  ){

		$arrDb = [];

		if( empty( $arrObj )  ){
			foreach( $arrHtml as $arrDb ){
				$arrDb['pages_id'] = $pageId;
				$objContents = new Contents();
				$objContents->attributes = $arrDb;
				$objContents->save();
			}
		}else{
			foreach( $arrHtml as $arrDb ){
				if( empty( $arrDb['lang'] )   || !isSet( $arrDb['content'] )  ){
					throw new \Exception('x34878rr lang empty or no set content - in edit');
				}
				$lang = $arrDb['lang'];
				$content = $arrDb['content'];

				foreach( $arrObj as $obj ){
					if( ($lang ==  $obj->getAttribute('lang')) && ( $pageId == $obj->getAttribute('pages_id') ) ){
						$obj->setAttribute( 'content',  $content );
						$obj->save();
					}
				}
			}
		}




		/*
		foreach( $arrHtml as $lang=>$content ){

			if( empty( $arrObj )  ){
				$arrDb['lang'] = $lang;
				$arrDb['content'] = $content;
				$arrDb['pages_id'] = $pageId;

				$objContents = new Contents();
				$objContents->attributes = $arrDb;
				$objContents->save();
			}else{
				foreach( $arrObj as $obj ){
					if( ($lang ==  $obj->getAttribute('lang')) && ( $pageId == $obj->getAttribute('pages_id') ) ){
						$obj->setAttribute( 'content',  $content );
						$obj->save();
					}
				}
			}
		}
		 */





		return  true;  //$arrDb;
	}


    /**
     * Define rules for validation
     */
    public function rules()
    {
        return [
            [[ 'content', 'lang', 'pages_id'], 'required'],
            //[['pages_id', 'menus_id', 'images_id'], 'default'],
        ];
    }

}
