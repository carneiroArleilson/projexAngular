import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {TokenService} from "./token.sevice";

@Component({
  selector: 'app-loguin',
  templateUrl: './loguin.component.html',
  styleUrls: ['./loguin.component.css']
})
export class LoguinComponent implements OnInit {

  constructor(private http:HttpClient, private router: Router, private tokenService: TokenService){}

  form: FormGroup = new FormGroup({
    loguin: new FormControl(''),
    senha: new FormControl(''),
  });
  @Output() submitEM = new EventEmitter();

  ngOnInit(): void {
  }

   async logar (){
    console.log('form:', {email: this.form.value.loguin, senha: this.form.value.senha})
    this.http.post<any>(`http://localhost:3000/loguin/entrar`, {email: this.form.value.loguin, senha: this.form.value.senha})
    .subscribe(
      token => this.tokenService.setToken(token),
      error => {
        console.log(error);
        
      }
    );
    const token = JSON.parse(String(this.tokenService.getToken()))
    token.sucess ? this.router.navigate(['home']) : alert('email ou senha invalidos!')
   };
}
