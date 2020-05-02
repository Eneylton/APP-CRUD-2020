import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { ServidorProvider } from '../../providers/servidor/servidor';


@IonicPage({})
@Component({
  selector: 'page-editar',
  templateUrl: 'editar.html',
})
export class EditarPage {

  id           :number;
  nome         :string;
  telefone     :string;
  email        :string;
  categoria    :string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private serve: ServidorProvider,
              private appCtrl: App) {
  }

  ionViewDidLoad() {

    this.id = this.navParams.get('id');
    this.nome = this.navParams.get('nome');
    this.telefone = this.navParams.get('telefone');
    this.email = this.navParams.get('email');
    this.categoria = this.navParams.get('categoria');

   

  }

  editar(){

    let body ={
      id:        this.id,
      nome:      this.nome,
      telefone:  this.telefone,
      email:     this.email,
      categoria: this.categoria,
      crud: 'update_user'
    };

    this.serve.postData(body, 'servidor.php').subscribe(data =>{
      this.appCtrl.getRootNav().setRoot('DasheboardPage');
    
    });
  }

  }


