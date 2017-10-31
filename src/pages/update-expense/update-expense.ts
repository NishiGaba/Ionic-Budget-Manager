import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UpdateExpensePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-expense',
  templateUrl: 'update-expense.html',
})
export class UpdateExpensePage {

	title;
	amount;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateExpensePage');
    this.title = this.navParams.get('expense').title;
    this.amount = this.navParams.get('expense').amount;
  }

}
