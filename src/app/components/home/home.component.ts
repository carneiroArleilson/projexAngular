import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TokenService } from '../loguin/token.sevice';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private http:HttpClient, private tokenService: TokenService){}

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    name: new FormControl(''),
    senha: new FormControl(''),
  });
  @Output() submitEM = new EventEmitter();

  
  async user()
  {
    
    console.log(this.form)
    let Token = JSON.parse(String(this.tokenService.getToken()))
    Token.sucess &&
    await this.http.patch<any>(`http://localhost:3000/user/${Token.id}`,{ name:this.form.value.name, email: this.form.value.email, senha: this.form.value.senha  })
    .subscribe(
      token => alert('Atualixado com sucesso!'),
      error => {
        console.log(error);
      }
    );
  }

  salvar( ){
    this.user()
  }

}
