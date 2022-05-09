import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
id=environment.id

nome=environment.nome
foto=environment.foto


  constructor(
    private router:Router,
    private route:ActivatedRoute,
    public auth:AuthService
  ) { }

  ngOnInit(): void {
  
  }



sair(){
  this.router.navigate(['/entrar']);
  environment.token=''
  environment.nome=''
  environment.foto=''
  environment.id=0


}


findByIdUsuario(id:number){

}

}
