import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
 
  constructor(public storage: Storage){
 
  }
 
  getData() {
  	console.log('it comes to hget adata');
    return this.storage.get('expenses'); 
  }
 
  save(data){
    this.storage.set('expenses', data);
  }
 
}
