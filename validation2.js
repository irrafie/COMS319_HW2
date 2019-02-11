//Validation1.js @author: Irfan Farhan Mohamad Rafiel, Iowa State, COMS319_HW2

function validate2(){
	valCheck = true;
	var img1 = getImage(validateEmail(document.forms["contactForm"]["email"].value),"email");
	document.getElementById("email").appendChild(img1);
	var img2 = getImage(validatePhone(document.forms["contactForm"]["phone"].value), "phone");
	document.getElementById("phone").appendChild(img2);
	var img3 = getImage(validateAddress(document.forms["contactForm"]["address"].value), "address");
	document.getElementById("address").appendChild(img3);
}

function validateTextField(a){
	let invalid = /^[0-9a-z]+$/i;
	
	if(a != null && a.match(invalid)){
		return true;
	}
	return false;
}

function validatePhone(a){
	let invalid = /^[0-9]/
	let hyphen = /^[\-]/
	
	if(a != null && a.match(invalid)){
		if(a.length == 10 && !a.match(hyphen)){
			return true;
		}
		else if(a.length == 12 && a.charAt(3) == ('-') && a.charAt(7) == ('-')){
			return true;
		}
	}
	return false;
}

function validateEmail(a){
	atSplit = a.split('@');
	if(atSplit.length == 2 && validateTextField(atSplit[0])){
		periodSplit = atSplit[1].split('.');
		if(periodSplit.length == 2 && validateTextField(periodSplit[0] + periodSplit[1])){
			return true;
		}
	}
	valCheck = false;
	return false;
}

function validateAlpha(a){
		let invalid = /^[\,a-z]+$/i;
			if(a != null && a.match(invalid)){
				return true;
			}
			return false;
}

function validateAddress(a){
	dotSplit = a.split(',');
	var city = dotSplit[1];
	console.log(city);
	if(validateAlpha(a) && a != null && city.length == 2){
		return true;
	}
	
	return false;
}

function getImage(bool, ID){
	var img = document.getElementById("img"+ID);
	if(img == null){
		img = new Image(15,15);
		img.id = "img"+ID;		
	}
	img.src = bool ? './correct.png' : './wrong.png';
	return img;
}
