import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';




@IonicPage({})
@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html',
})
export class DetalhePage {

  id           :number;
  nome         :string;
  telefone     :string;
  email        :string;
  categoria    :string;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams) {
}


  ionViewDidLoad() {
    this.id = this.navParams.get('id');
    this.nome = this.navParams.get('nome');
    this.telefone = this.navParams.get('telefone');
    this.email = this.navParams.get('email');
    this.categoria = this.navParams.get('categoria');
  }

}
