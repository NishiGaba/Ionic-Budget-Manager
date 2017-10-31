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


  public expenses = [];

  saveExpense() {

  	console.log(this.title, this.amount);
  	let newExpense = {
  		title: this.title,
  		amount: this.amount
  	};

  	
  	this.storage.set('name', newExpense.title);

  	this.expenses.push(newExpense);
  	console.log(this.expenses);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddExpensePage');
  }

}
