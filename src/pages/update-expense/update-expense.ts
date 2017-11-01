import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DataProvider } from '../../providers/data/data';
import { ListExpensePage } from '../list-expense/list-expense';


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

	selectedExpense: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public dataService : DataProvider) {
  	
  	this.dataService.getData().then((expenses) => {
 
      if(expenses){
        this.expenses = expenses;
        console.log('saved expenses');
        console.log(expenses);
      }
    });
  }

  updateExpense(event, expense) {
    console.log(expense);
  }

  deleteExpense(event, expense) {
    
    this.expenses = this.expenses.filter(function(item) {
				    	if(expense.id != item.id) {
				    		return expense;
				    	}
				    });

    console.log('remained array');
    console.log(this.expenses);
    this.dataService.save(this.expenses);
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateExpensePage');
    this.selectedExpense = this.navParams.get('expense');
  }

}
