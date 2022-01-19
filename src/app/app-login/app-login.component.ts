import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss']
})
export class AppLoginComponent {
  formularioLogin = this.loginBuilder.group({
    email: new FormControl('',[Validators.required, Validators.email]),
    //validação de preenchimento e formato
    senha: new FormControl('', Validators.required)
    //apenas validação de preenchimento
  });

  constructor(private loginBuilder: FormBuilder) {}

  onSubmit(){
  }
}
