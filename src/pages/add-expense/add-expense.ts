import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the AddExpensePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-expense',
  templateUrl: 'add-expense.html',
})
export class AddExpensePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  public storage: Storage) {
  }

  saveExpense() {

  	console.log(this.title, this.amount);
  	let newExpense = {
  		title: this.title,
  		amount: this.amount
  	};

  	// new Storage().set("key","value");
  	this.storage.set('name', newExpense.title);

  	 this.storage.get('name').then((val) => {
    console.log('Your name is', val);
  });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddExpensePage');
  }

}
