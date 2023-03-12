import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent implements OnInit {
  public reviews: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.get('/api/review').subscribe((response) => {
      this.reviews = response
    })
  }

  itemDelete(item: any) {
    this.apiService.getOne('/api/review/delete', item.id).subscribe((response) => {
      if (response.status === 204) {
        this.reviews.splice(this.reviews.indexOf(item), 1);
      }
    })
  }
}
