import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpdateExpensePage } from './update-expense';

@NgModule({
  declarations: [
    UpdateExpensePage,
  ],
  imports: [
    IonicPageModule.forChild(UpdateExpensePage),
  ],
})
export class UpdateExpensePageModule {}
