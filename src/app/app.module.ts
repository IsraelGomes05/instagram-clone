import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AcessoComponent} from './acesso/acesso.component';
import {BannerComponent} from './acesso/banner/banner.component';
import {LoginComponent} from './acesso/login/login.component';
import {CadastroComponent} from './acesso/cadastro/cadastro.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {AutenticacaoService} from './autenticacao.service';
import {HomeComponent} from './home/home.component';
import {PublicacaoComponent} from './home/publicacao/publicacao.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import {AutenticacaoGuardService} from './autenticacao-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    AcessoComponent,
    BannerComponent,
    LoginComponent,
    CadastroComponent,
    HomeComponent,
    PublicacaoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [AutenticacaoService, AutenticacaoGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
