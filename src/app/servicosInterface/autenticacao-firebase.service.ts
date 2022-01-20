import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { from } from 'rxjs';
//@indica que faz acessos externos de um repositório

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoFirebaseService {

  constructor(
    private usuarioFb: Auth
    ) { }

    loginUsuario(usuarioEmail: string, usuarioSenha: string) {
      return from(signInWithEmailAndPassword(this.usuarioFb, usuarioEmail, usuarioSenha));
      //usuarioEmail e usuarioSenha são parâmetros locais, ou seja, não precisam do this porque só existem dentro desse método
    }

    sairLogin() {
      return from(this.usuarioFb.signOut());
    }
}
