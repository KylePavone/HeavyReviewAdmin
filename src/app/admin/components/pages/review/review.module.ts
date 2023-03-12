import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ReviewCreateComponent } from './review-create/review-create.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { SharedModule } from '../../shared/shared.module';
import {FormsModule}   from '@angular/forms';
import { ReviewItemComponent } from './review-item/review-item.component';
import { RouterModule } from '@angular/router';
// import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ReviewCreateComponent,
    ReviewListComponent,
    ReviewItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule
    // ReactiveFormsModule
  ],
  providers: [
    DatePipe
  ]
})
export class ReviewModule { }
