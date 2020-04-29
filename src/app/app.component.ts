import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  hasil:number;
  hasilx="";
  hasil1:number;
  dis(val){
    this.hasil=this.hasil+val;
    this.hasilx=this.hasilx+val;   
  }
  simbol="";
  pis(val){
    this.simbol=val
    this.hasil1=this.hasil;
    this.hasil=0;
  }
  jawaban;
  solve(){
    if(this.simbol=='-'){
      this.jawaban=this.hasil-this.hasil1;
    }
    if(this.simbol=='+'){
      this.jawaban=this.hasil+this.hasil1;
    }
    if(this.simbol=='*'){
      this.jawaban=this.hasil*this.hasil1;
    }
  }
}


