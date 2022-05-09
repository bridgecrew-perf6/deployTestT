import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  postagem: Postagem = new Postagem();
  listaPostagens: Postagem[];
  tituloPostagem: string;
  nome=environment.nome;

  


 
  



  

  usuario: Usuario = new Usuario();
  idUsuario = environment.id;
  

  key = 'data';
  reverse = true;

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private authService: AuthService,
    private alertas: AlertasService

  ) { }

  ngOnInit() {


    if (environment.token == '') {
      this.alertas.showAlertDanger("sessão expirada");
      this.router.navigate(['/entrar'])
    }

   

    
    
  

  }

  


  


  findAllPostagem() {
    this.postagemService.getAllPostagem().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp;
    })
  }



  findByIdUser() {
    this.authService.getByIdUser(this.idUsuario).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }

  findByTituloPostagem() {
    if (this.tituloPostagem === '') {
     this.findAllPostagem();
    } else {
      this.postagemService.getByTituloPostagem(this.tituloPostagem).subscribe((resp: Postagem[]) => {
        this.listaPostagens = resp;
      })
    }
  }

  


  publicarPostagem() {
    
    this.usuario.id = this.idUsuario;
    this.postagem.usuario = this.usuario;


    this.postagemService.criarPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp;
      this.alertas.showAlertSuccess('Formulário salvo com sucesso!')
      this.postagem = new Postagem()
      this.findAllPostagem();
      
      
      
    })
    
  

  }

}
