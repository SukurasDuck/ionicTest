import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewsPage } from './news.page';
import { HttpModule } from '@angular/http';
import { ComponentModule } from 'src/app/components/userComponent.module';



const routes: Routes = [
  {
    path: '',
    component: NewsPage
  },{
    path: 'newdetails/:id',
    loadChildren: '../new-details/new-details.module#NewDetailsPageModule'
  }
];

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentModule
  ],
  declarations: [NewsPage]
})
export class NewsPageModule { }
