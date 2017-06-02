import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { UsersPage } from './../users/users';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  onViewUsers(params: string) {
    const modal = this.modalCtrl.create(UsersPage, params);
    modal.present();
    // modal.onDidDismiss();
  }

}
