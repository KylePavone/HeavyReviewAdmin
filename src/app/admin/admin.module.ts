import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { ReviewModule } from './components/pages/review/review.module';
import { PageNotFoundModule } from './components/pages/page-not-found/page-not-found.module';
import { ReviewCreateComponent } from './components/pages/review/review-create/review-create.component';
import { NavComponent } from './components/structure/nav/nav.component';
import { ReviewListComponent } from './components/pages/review/review-list/review-list.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { SharedModule } from './components/shared/shared.module';
import { ReviewResolver } from '../core/resolvers/review.resolver';
import { ReviewItemComponent } from './components/pages/review/review-item/review-item.component';



const routes: Routes = [
  { 
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'create-review', component: ReviewCreateComponent},
      { path: 'review-list', component: ReviewListComponent },
      { path: 'review-list/:id', component: ReviewCreateComponent, resolve: {
          data: ReviewResolver
        }
      },
      { path: '**', component: PageNotFoundComponent }
    ]
  } 
]


@NgModule({
  declarations: [
    AdminComponent,
    NavComponent,
  ],
  imports: [
    CommonModule,
    ReviewModule,
    PageNotFoundModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class AdminModule { }
