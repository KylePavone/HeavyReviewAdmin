import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
      path: 'page-not-found',
      component: PageNotFoundComponent,
      data : {
          componentReuse: false,
          publicRoute: true,
          guestOnlyRoute: true
      }
  }
];

@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PageNotFoundModule { }
