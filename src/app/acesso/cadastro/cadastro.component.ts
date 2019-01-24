import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Usuario} from '../usuario.model';
import {AutenticacaoService} from '../../autenticacao.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  @Output() public exibirPainel: EventEmitter<string> = new EventEmitter();

  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'nome_completo': new FormControl(null),
    'nome_usuario': new FormControl(null),
    'senha': new FormControl(null)
  });

  constructor(public autenticacaoService: AutenticacaoService) { }

  ngOnInit() {
  }

  public exibirPainelLogin() {
    this.exibirPainel.emit('login');
  }

  public cadastrarUsuario(): void {
    const usuario: Usuario = new Usuario(
      this.formulario.value.email,
      this.formulario.value.nome_completo,
      this.formulario.value.nome_usuario,
      this.formulario.value.senha
    );

    this.autenticacaoService.cadastrarUsuario(usuario)
      .then(() => this.exibirPainelLogin());
  }
}
