<?php
namespace admin\controllers;

use Yii;
//use yii\rest\Controller;
use common\models\Pages;
use common\models\Images;
use common\models\Translates;
use common\models\Contents;

use yii\filters\auth\CompositeAuth;
use yii\filters\auth\HttpBearerAuth;
use yii\filters\AccessControl;

class PagesController extends BaseController{

/*
	private function dataList(){
		$data = Pages::getDataList();
		return  $data; 
	}
*/
	public function actionIndex(){
		$data = Pages::getDataList();   //$this->dataList();
		return  $this->respond(  $data );
		//return $data;
	}

	public function actionGet( $id = null ){
		$out =  Pages::getDataById( $id );
		//return $out;

		return  $this->respond(  $out );
	}

	/**
	* $id - image id
	*/
	public function actionShowimage( $id = null ){
		Images::displayImgById( $id  );
	}


	/**
	* potrzebne do testow
	*/
	public function actionDeleteall(){ 
		Pages::deleteAll();
	}

	public function actionDelete( $id =null ){

		Images::DeleteImagesPageByPageId( $id );
		$isDel = Pages::deletePageById( $id  );
		return  $isDel;
	}

	public function actionSave(){
		//die('oo');
		$arrPost = $this->getPostData();
		$arrPost['is_deleted'] = 1;

		//var_dump(   $arrPost );
		//die('+++++++++++');

		$dataTranslate = [];
		if( !empty( $arrPost['translates'] )  ){
			$dataTranslate =  $arrPost['translates'];
			unset($arrPost['translates']);
		}

		$dataContent = [];
		if( !empty( $arrPost['contents'] )  ){
			$dataContent =  $arrPost['contents'];
			unset($arrPost['contents']);
		}

		$page  = new Pages;
		$objPage  = $page->saveData( $arrPost  );

		$pageId = $objPage->getAttribute('id');

		$arrObjTranslates = $objPage->translates;
		Translates::saveData( $dataTranslate, [ 'pages_id' => $pageId ],  $arrObjTranslates );

		$arrObjContents   = $objPage->contents;
		Contents::saveData( $dataContent, $pageId, $arrObjContents );

		return $pageId;
	}

	public function behaviors(){

		$behaviors = parent::behaviors();

        $behaviors['authenticator'] = [
            'class' => CompositeAuth::className(),
            'authMethods' => [
                //HttpBasicAuth::className(),
                HttpBearerAuth::className(),
                //QueryParamAuth::className(),
            ],
        ];

		$behaviors['verbs'] = [
			'class' => \yii\filters\VerbFilter::className(),
			'actions' => [
				//'index' => ['get'],
				'save' => ['post'],
				'get' => ['get'],
				'delete' => ['delete'],
				'deleteall' => ['delete'],
			],
		];
		return $behaviors;
	}

}
