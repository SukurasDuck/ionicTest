import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Newdetails2Page } from './newdetails2.page';

const routes: Routes = [
  {
    path: '',
    component: Newdetails2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Newdetails2Page]
})
export class Newdetails2PageModule {}
