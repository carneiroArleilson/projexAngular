import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from '../loguin/token.sevice';

@Component({
  selector: 'app-imovel',
  templateUrl: './imovel.component.html',
  styleUrls: ['./imovel.component.css']
})
export class ImovelComponent {

  constructor(private http:HttpClient, private router: Router, private tokenService: TokenService){}

  form: FormGroup = new FormGroup({
    cidade: new FormControl(''),
    estado: new FormControl(''),
    pais: new FormControl(''),
    endereco: new FormControl(''),
    cep: new FormControl(''),
    area: new FormControl(''),
    contato: new FormControl(''),
    valor: new FormControl(''),
  });
  @Output() submitEM = new EventEmitter();

  ngOnInit(): void {
  }

   async salvar (){
    console.log('form:', this.form)
    this.http.post<any>(`http://localhost:3000/imovel`, {
      cidade: this.form.value.cidade, 
      estado: this.form.value.estado, 
      pais: this.form.value.pais, 
      endereco: this.form.value.endereco, 
      cep: this.form.value.cep, 
      area: this.form.value.area, 
      contato: this.form.value.contato, 
      valor: this.form.value.valor})
    .subscribe(
      token => this.tokenService.setToken(token),
      error => {
        console.log(error);
        
      }
    );
    const token = JSON.parse(String(this.tokenService.getToken()))
    token.sucess && this.router.navigate(['home'])
   };

}
