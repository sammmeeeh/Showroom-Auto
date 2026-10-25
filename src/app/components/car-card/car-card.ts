import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Auto } from '../../interfaces/auto';

@Component({
  imports: [FontAwesomeModule],
  selector: 'app-car-card',
  styleUrl: './car-card.css',
  templateUrl: './car-card.html',
})
export class CarCard {
  faHeart = faHeart;

  @Input() auto!: Auto;
  @Input() isFavorite: boolean = false;

  @Output() onSeeMore = new EventEmitter<Auto>();
  @Output() onToggleFavorite = new EventEmitter<Auto>();

  seeMore() {
    this.onSeeMore.emit(this.auto);
  }

  toggleFavorite() {
    this.onToggleFavorite.emit(this.auto);
  }
}
