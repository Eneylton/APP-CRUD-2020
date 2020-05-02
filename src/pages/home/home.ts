import { Component } from '@angular/core';
import { IonicPage, NavController, App } from 'ionic-angular';
import { ServidorProvider } from '../../providers/servidor/servidor';


@IonicPage({})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nome:     string = "";
  telefone: string = "";
  email:    string = "";
  categoria:string = "";
  foto     :string = "";
  money    :string = "";

  constructor(public navCtrl: NavController, 
              private serve: ServidorProvider,
              private appCtrl: App) {

  }

  add(){
    let body ={
      nome:      this.nome,
      telefone:  this.telefone,
      email:     this.email,
      categoria: this.categoria,
      foto:      this.foto,
      money:      this.money,
      crud: 'add_user'
    };

    this.serve.postData(body, 'servidor.php').subscribe(data =>{
      this.appCtrl.getRootNav().setRoot('DasheboardPage');
    });
  }

}
