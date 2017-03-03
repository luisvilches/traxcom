function validacion(){
	var nombre = document.getElementById('nombre').value;
	var correo = document.getElementById('correo').value;
	var telefono = document.getElementById('telefono').value;
	var mensaje = document.getElementById('mensaje').value;
	var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	if(nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)){

		//Materialize.toast('Campo nombre Invalido', 4000,'error');
		toastr["error"]("Campo Nombre Invalido'")
		return false;
	}

	else if(!expr.test(correo)){
		//Materialize.toast('Campo correo invalido', 4000,'error');
		toastr["error"]("Campo Correo Invalido'")
		return false;
	} 

	else if(!(/^\d{8}$/.test(telefono))){
		//Materialize.toast('Campo telefono invalido', 4000,'error');
		toastr["error"]("Campo Telefono Invalido'")
		return false;
	}

	else if(mensaje == null || mensaje.length == 0 || /^\s+$/.test(mensaje)){
		//Materialize.toast('Campo mensaje invalido', 4000,'error');
		toastr["error"]("Campo Mensaje Invalido'")
		return false;
	}
	return true;
};	