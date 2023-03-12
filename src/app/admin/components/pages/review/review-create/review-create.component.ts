import { DatePipe } from '@angular/common';
import { Component, DoCheck, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { InputComponent } from '../../../shared/components/input/input.component';
import { TextareaComponent } from '../../../shared/components/textarea/textarea.component';

export interface Review {
  id?: number;
  title?: string;
  content?: string;
  likes_count?: number;
  created?: string;
}


@Component({
  selector: 'app-review-create',
  templateUrl: './review-create.component.html',
  styleUrls: ['./review-create.component.scss']
})
export class ReviewCreateComponent implements OnInit {

  public model: Review = {};
  public response!: Subscription;
  public reviewSubscription!: Subscription;

  @ViewChild('savedHint', {static: true}) savedHint!: ElementRef;
  @ViewChild('titleField', {static: true}) title!: InputComponent | any;
  @ViewChild('textField', {static: true}) text!: TextareaComponent | any;

  constructor(
      private apiService: ApiService,
      private datePipe: DatePipe,
      private router: Router,
      private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    if (!this.router.url.includes('create')) {
      this.reviewSubscription = this.route.data.subscribe((data: any) => {        
        this.model.id = data.data.id
        this.model.title = data.data.title
        this.model.content = data.data.content
      })
    }
  }

  initSaveHint() {
    let savedHint = this.savedHint.nativeElement
    savedHint.classList.add('active')
    setTimeout(() => {
      savedHint.classList.remove('active')
    }, 4000)
  }

  save() {
    this.apiService.post('/api/review/create', this.model).subscribe((response) => {
      if (response.status === 201) {
        this.initSaveHint()
      }
    })
  }
}
