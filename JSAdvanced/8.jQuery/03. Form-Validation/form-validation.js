function validate() {
	$('#submit').on('click', checkDate);
	$('#company').on('click', showHideCompany);
	
	function checkDate(e) {
		e.preventDefault();
		console.log('hellllooooaoaoaoao')
		let username = $('#username');
		let email = $('#email')
		let password = $('#password');
		let confirmPassword = $('#confirm-password');
		let companyNumber = $('#companyNumber');
		let isValid = true;

		if (!/^[A-Za-z0-9]{3,20}$/g.test(username.val())) {
			username.css('border-color', 'red');
			isValid = false;
		}

		if(!/(.+)?@(.+)?\.(.+)?/g.test(email.val())) {
			email.css('border-color', 'red');
			isValid = false;
		}

		if(!/^.{5,15}$/g.test(password.val())){
			password.css('border-color', 'red');
			isValid = false;
		}

		if(!/^\w{5,15}$/g.test(confirmPassword.val()) || password.val() !== confirmPassword.val()){
			confirmPassword.css('border-color', 'red');
			isValid = false;
		}

		if($('#companyInfo').css('display') === 'block' && companyNumber.val() < 1000 || companyNumber.val() > 9999){
			companyNumber.css('border-color', 'red');
			isValid = false;
		}

		if(isValid) {
			$('#valid').css('display', 'block');
		}
	}

	function showHideCompany() {
		let companyInfo = $('#companyInfo');
		if (companyInfo.css('display') === 'none') {
			companyInfo.css('display', 'block');
		}else{
			companyInfo.css('display', 'none');
		}
	}
}
