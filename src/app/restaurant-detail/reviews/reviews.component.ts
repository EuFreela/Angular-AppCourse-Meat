import { RestaurantsService } from './../../restaurants/restaurants.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(
    private route: ActivatedRoute,
    private RestaurantsService: RestaurantsService) { }

  ngOnInit() {
    this.reviews = this.RestaurantsService
    .reviewsOfRestaurant(this.route.parent.snapshot.params['id'])
  }

}
