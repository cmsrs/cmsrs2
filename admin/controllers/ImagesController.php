<?php
namespace admin\controllers;

use Yii;
//use yii\rest\Controller;
use common\models\Images;
use yii\web\UploadedFile;
//use common\models\Translates;

use yii\filters\auth\CompositeAuth;
use yii\filters\auth\HttpBearerAuth;
use yii\filters\AccessControl;


class ImagesController extends BaseController{

    public function actionUpload()
    {
		echo "post";
		print_r(  $_POST );
		echo "files";
				  //$_FILES
		print_r(  $_FILES );

		echo var_export(  $_POST  , true)."   ".  var_export(  $_FILES  , true)  ;
		die('______');

		$pageId = $this->getPostData( 'pages_id' );
		if( empty(  $pageId  )  ){
			if( empty($_POST['pages_id']) ){
				die( '0x34534 empty page_id in post data to upload'  );
			}
			$pageId =  $_POST['pages_id'];
		}

		//die('__________'.$pageId);
        $model = new Images();

        if (Yii::$app->request->isPost) {

            //$model->imageFile = UploadedFile::getInstance($model, 'imageFile');
            if ( $id = $model->upload( $pageId )) {
                // file is uploaded successfully
                return $id;
            }
        }
		return false;
    }

	public function actionDelete( $id ){

        $isDel = Images::deleteImageById( $id  );
        return  $isDel;

	}




    public function behaviors()
    {
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
                'upload' => ['post'],
				'delete' => ['delete'],
            ],
        ];
        return $behaviors;
    }

}
