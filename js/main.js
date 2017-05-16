function validateForm(){
	
	function nombre(){
		var nombre = document.getElementById("name").value;

		if(!(/^[A-Z][a-z]{3,19}$/).test(nombre)){
			
		}

		var divBox = document.getElementsByClassName("name-container input-box")[0];
		var x = document.createElement("span");
  		var t = document.createTextNode("Ingrese un nombre válido");
 		x.appendChild(t);
 		divBox.appendChild(x);

		}
		nombre();

	function apellido(){
		var apellido = document.getElementById("lastname").value;

		if(!(/^[A-Z][a-z]{3,19}$/).test(apellido)){
		
		} 

		var divBox = document.getElementsByClassName("lastname-container input-box")[0];
		var x = document.createElement("span");
  		var t = document.createTextNode("Ingrese un apellido válido");
 		x.appendChild(t);
 		divBox.appendChild(x);
	}
	apellido();

	function email(){
		var email = document.getElementById("input-email").value;

		if(!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(email))){
	
		} 

		var cajaDiv = document.getElementsByClassName("email-container input-box")[0];
		var x = document.createElement("span");
  		var t = document.createTextNode("Ingrese un correo valido");
 		divBox.appendChild(x);
	}

	function password(){
		var password = document.getElementById("input-password").value;

		if((password == "password") || (password == 123456) || (password == 098754) || (!(/^(?=.*\d).{6,}$/).test(password)) ){
		
		}	

		var divBox = document.getElementsByClassName("form-group input-box")[0];
		var x = document.createElement("span");
  		var t = document.createTextNode("Ingrese una clave válida");
 		x.appendChild(t);
 		divBox.appendChild(x);

	}
	password();

	function select(){

		var select = document.getElementsByClassName("form-control").selectedIndex;

		if( select == null || select == 0 ) {
	  	
		} 

		var cajaDiv = document.getElementsByClassName("form-group input-box")[1];
		var x = document.createElement("span");
  	var t = document.createTextNode("Debe seleccionar su bicicleta");
 		x.appendChild(t);
 		cajaDiv.appendChild(x);
	}
	select();
}