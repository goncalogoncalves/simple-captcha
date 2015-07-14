<?php

ini_set('display_errors',1);
ini_set('display_startup_errors',1);
error_reporting(-1);

define("captchaCode" , "");

include 'captcha.class.php';

if (isset($_GET['aux'])) { $aux = $_GET['aux']; }else{ $aux = "0"; }
if (isset($_GET['input_captcha'])) { $input_captcha = $_GET['input_captcha']; }else{ $input_captcha = "0"; }

if ($aux == 'createCaptcha') {

	$captcha = new captcha("fonts/");
	$htmlCaptcha = $captcha->createCaptcha();

	echo $htmlCaptcha;

}else if ($aux == 'validateCaptcha') {

	if ($input_captcha != "0") {

		$captcha = new captcha();
		$validCaptcha = $captcha->validateCaptcha($input_captcha);

		echo $validCaptcha;
	}
}


?>
