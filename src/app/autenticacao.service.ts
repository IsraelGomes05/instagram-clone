import {Usuario} from './acesso/usuario.model';
import * as firebase from 'firebase';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class AutenticacaoService {

  public token: string;

  constructor(private router: Router) {
  }

  public cadastrarUsuario(usuario: Usuario): Promise<any> {
    return firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
      .then(() => {

        delete usuario.senha;

        firebase.database()
          .ref(`usuario_detalhe/${btoa(usuario.email)}`)
          .set(usuario)
          .catch((erro => {
            console.log(erro);
          }));

      })
      .catch((erro => {
        console.log(erro);
      }));
  }

  public autenticar(email: string, senha: string): void {
    firebase.auth().signInWithEmailAndPassword(email, senha)
      .then(() => {
        firebase.auth().currentUser.getIdToken()
          .then((idToken: string) => {
            this.token = idToken;
            localStorage.setItem('token', idToken);
            this.router.navigate(['/home']);
          });
      })
      .catch((erro => {
        console.log(erro);
      }));
  }

  public isTokenValido(): boolean {

    if (this.token === undefined && localStorage.getItem('token') != null) {
      this.token = localStorage.getItem('token');
    }

    if (this.token === undefined) {
      this.router.navigate(['/login']);
    }

    return this.token !== undefined;
  }

  public sair(): void {
    firebase.auth().signOut()
      .then(() => {
        localStorage.removeItem('token');
        this.token = undefined;
        this.router.navigate(['/login']);
      });
  }
}
