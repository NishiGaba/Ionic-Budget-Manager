import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DataProvider } from '../../providers/data/data';

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

  public expenses = [];
  id: string;
  title: string;
  amount: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,  public storage: Storage, public dataService : DataProvider) {
  }

  saveExpense() {

    this.id = Math.random().toString(16).slice(2);

  	let newExpense = {
      id    : this.id,
  		title : this.title,
  		amount: this.amount
  	};


  	this.expenses.push(newExpense);
    this.dataService.save(this.expenses);
  	
  	console.log(this.expenses);
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddExpensePage');
  }

}
