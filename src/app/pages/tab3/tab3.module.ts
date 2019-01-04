import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ComponentModule } from 'src/app/components/userComponent.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ComponentModule,
    RouterModule.forChild([{ path: '', component: Tab3Page },
  {path:'badge',loadChildren:"../badge/badge.module#BadgePageModule"},
{path:'datetime',loadChildren:'../datetime/datetime.module#DatetimePageModule'},
{ path: 'infinite-scroll', loadChildren: '../infinite-scroll/infinite-scroll.module#InfiniteScrollPageModule' },
{ path: 'loading', loadChildren: '../loading/loading.module#LoadingPageModule' }])
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
