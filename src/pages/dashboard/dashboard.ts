import { Component ,ViewChild, OnInit, AfterViewInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DataProvider } from '../../providers/data/data';
import { Chart } from 'chart.js';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

	public expenses = [];
  	public totalExpense = 1000;
  	public countExpense = 0;

  	@ViewChild('doughnutCanvas') doughnutCanvas;
 
   doughnutChart: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public dataService : DataProvider) {
		
		this.dataService.getData().then((expenses) => {
 
	      if(expenses){
	        this.expenses = expenses;
	        console.log('saved expenses');
	        console.log(expenses);

	        for(let i=0; i< expenses.length; i++) {
	        	this.countExpense += expenses[i].amount;
	        }
	      }
	    });
	}

	ionViewDidLoad() {
	console.log('ionViewDidLoad DashboardPage');

	this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
 
            type: 'doughnut',
            data: {
                labels: ["Total Budget", "Total Expense"],
                datasets: [{
                    label: '# of Votes',
                    data: [12000, 800],
                    backgroundColor: [
                        "#36A2EB",
                        "#FF6384"
                    ],
                    hoverBackgroundColor: [
                        "#36A2EB",
                        "#FF6384"
                    ]
                }]
            }
 
        });

                    
	}

}
