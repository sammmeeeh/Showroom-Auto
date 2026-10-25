import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
@Component({
  imports: [RouterOutlet, FontAwesomeModule], //import other stuff houni
  selector: 'app-head-bar', // nom dune balise pour integrer ce composant dans un autre
  styleUrl: './head-bar.css', 
  templateUrl: './head-bar.html',
})
export class HeadBar {
  faHeart = faHeart;

  // number of favorite cars, sent by the parent (App)
  @Input() favoritesCount: number = 0;
}
