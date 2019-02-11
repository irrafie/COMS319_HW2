//Validation1.js @author: Irfan Farhan Mohamad Rafiel, Iowa State, COMS319_HW2

function validate1(){
	var img1 = getImage(validateTextField(document.forms["contactForm"]["firstName"].value),"firstName");
	document.getElementById("firstName").appendChild(img1);
	var img2 = getImage(validateTextField(document.forms["contactForm"]["lastName"].value), "lastName");
	document.getElementById("lastName").appendChild(img2);
	var img3 = getImage(validateDDM("genderID"), "gender");
	document.getElementById("gender").appendChild(img3);
	var img4 = getImage(validateDDM("stateID"), "state");
	document.getElementById("state").appendChild(img4);
}

function validateTextField(a){
	let invalid = /^[0-9a-z]+$/i;
	
	if(a != null && a.match(invalid)){
		return true;
	}
	return false;
}

function validateDDM(ddm){
	var dropdown = document.getElementById(ddm);
	
	if(dropdown.selectedIndex != 0){
		return true;
	}
	else{
		return false;
	}
	
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
