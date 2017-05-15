function validateForm(){
	var name = document.getElementById("name").value;
	var lastName = document.getElementById("lastname").value;
	var email = document.getElementById("input-email").value;
	var password = document.getElementById("input-password").value;
	var twitter = document.getElementById("input-social").value;

	if(name == null || name.length == 0 || /^\s+$/.test(name)){
		alert("Escribe algo pajarón");
	}
	if(lastName == null || lastName.length == 0 || /^\s+$/.test(lastName)) {
		alert("Escribe algo pajarón");
	}
	if(email == null || email.length == 0 || /^\s+$/.test(email)) {
		alert("Escribe algo pajarón");
	}
	if(password == null || password.length == 0 || /^\s+$/.test(password)) {
		alert("Escribe algo pajarón");
	}
	if(twitter == null || twitter.length == 0 || /^\s+$/.test(password)) {
		alert("Escribe algo pajarón"); 
	}


};