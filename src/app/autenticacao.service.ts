import {Usuario} from './acesso/usuario.model';
import * as firebase from 'firebase';

export class AutenticacaoService {

  public cadastrarUsuario(usuario: Usuario): void {
    firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
      .then((resp: any) => {

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
      .then((resp => {
        console.log(resp);
      }))
      .catch((erro => {
        console.log(erro);
      }));
  }
}
