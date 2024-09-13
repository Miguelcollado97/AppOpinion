import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  /* esta es otra manera de llamar al usuario y contraseña creando 
  un objeto con el valor de login */
  formLogin = {
    rut: "",
    password: ""
  }

 

  /* ESTAS SON VARIABLES INDEPENDIENTES */
  rut: string = ""
  password: string = ""

   /* */
   constructor(private router: Router){}

  

  ngOnInit() {
  }

  /* ESTA FORMA SE PUEDE USAR SI usamos las variables independientes
  iniciarSesion()
  {
    console.log("rut" + this.rut)
    console.log("password" + this.password)
  } */


  /* SE USARA ESTE MODO DE LLAMAR A LOS VALOR EN CASO DE QUE USEMOS
  EL OBJETO FORMLOGIN */
  iniciarSesion()
  {
    console.log("rut" + this.formLogin.rut)
    console.log("password" + this.formLogin.password)

    /*para traer los datos del login o mas bieeen del usuario 
    usaremos lo siguiente */
    let datosEnviar : NavigationExtras = {
      queryParams : {
        rutUsuario: this.formLogin.rut,
        /*para agregar mas campos se puedes usar una coma aca por ejemplo 
        le estamos dando la edad de 24 al usuario */
        edad: 24
       }
    }


    /*esto nos sirve para que al dar click en el iniciar sesion
     esto se vaya al home lo cual tambien se tuvo que modificar el 
     constructor para agregar la ruta del home*/
    this.router.navigate(['/home'], datosEnviar);
  }
}
