import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DataProvider } from '../../providers/data/data';
import { UpdateExpensePage } from '../update-expense/update-expense';
/**
 * Generated class for the ListExpensePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-expense',
  templateUrl: 'list-expense.html',
})
export class ListExpensePage {

	public expenses = [];	

  	constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public dataService : DataProvider) {
  		this.dataService.getData().then((expenses) => {
 
	      if(expenses){
	        this.expenses = expenses;
	        console.log('saved expenses');
	        console.log(expenses);
	      }
	    });
  	}


  	expenseTapped(event, expense) {
	    this.navCtrl.push(UpdateExpensePage, {
	      expense: expense
	    });
	    console.log(this.navCtrl);
	  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListExpensePage');
  }

}
