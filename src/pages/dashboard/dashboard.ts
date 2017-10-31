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
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]
            }
 
        });

                    
	}

}
