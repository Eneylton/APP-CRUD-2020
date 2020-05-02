import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { ServidorProvider } from '../../providers/servidor/servidor';


@IonicPage({})
@Component({
  selector: 'page-dasheboard',
  templateUrl: 'dasheboard.html',
})
export class DasheboardPage {

  lojas: any = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private serve: ServidorProvider,
    private appCtrl: App) {
  }

  ionViewDidLoad() {
    this.lojas = [];
    this.listarloja();
  }

  listarloja() {
    let body = {

      crud: 'get_user'

    };

    this.serve.postData(body, 'servidor.php').subscribe(data => {
      for (let loja of data.result) {
        this.lojas.push(loja);
        console.log(this.lojas);
      }
    });
  }


  formadd() {
    this.navCtrl.push('HomePage');
  }

  detalheForm(id, nome, categoria, telefone, email) {
    this.navCtrl.push('DetalhePage', {
      'id': id,
      'nome': nome,
      'telefone': telefone,
      'categoria': categoria,
      'email': email
    });
  }

  editForm(id, nome, categoria, telefone, email) {
    this.navCtrl.push('EditarPage', {
      'id': id,
      'nome': nome,
      'telefone': telefone,
      'categoria': categoria,
      'email': email
    });

  }

  delete(id){
    let body = {
      id: id,
      crud:'deletar'}
   
    this.serve.postData(body, 'servidor.php').subscribe(data =>{
      this.appCtrl.getRootNav().setRoot('DasheboardPage');
    });

  }
  

}



