import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewDetailsPage } from './new-details.page';

const routes: Routes = [
  {
    path: '',
    component: NewDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers:[History],
  declarations: [NewDetailsPage]
})
export class NewDetailsPageModule {}
