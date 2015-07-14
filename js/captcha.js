/**
 * Create the captcha
 */
 function createCaptcha() {
 	$("#result").html("");

 	$.ajax({
 		url: "captchaBridge.php",
 		cache: false,
 		data: { aux: "createCaptcha" }
 	}).done(function( resposta ) {
 		$('#captcha-container').html(resposta);
 	});
 }

/**
 * Validate the captcha
 * @return boolean
 */
 function validateCaptcha() {

 	var input_captcha = $("#user-input-captcha").val();
 	var validCaptcha;

 	$.ajax({
 		url: "captchaBridge.php",
 		cache: false,
 		async: false,
 		data: {
 			aux: "validateCaptcha",
 			input_captcha: input_captcha
 		}
 	}).done(function( resposta ) {
 		validCaptcha = resposta;
 	});

 	return validCaptcha;
 }


 function userSubmitForm(){
 	var validCaptcha = validateCaptcha();

 	if (validCaptcha == false) {
 		$("#result").html("not ok");
 	}else{
 		$("#result").html("ok");
 	};

 }

 createCaptcha();


