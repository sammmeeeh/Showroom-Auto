import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { Auto } from '../../interfaces/auto';
import { CarCard } from '../car-card/car-card';


@Component({
  imports: [FontAwesomeModule, CarCard],
  selector: 'app-search-bar',
  styleUrl: './search-bar.css',
  templateUrl: './search-bar.html',
})

export class SearchBar implements OnChanges {
  faMagnifyingGlass = faMagnifyingGlass;

  @Input() autos:Auto []=[]

  // ids of the favorite cars, sent by the parent (App)
  @Input() favorites:number[]=[]

  @Output() onSelectCar=new EventEmitter<Auto>();

  @Output() onToggleFavorite=new EventEmitter<Auto>();

  selectedAutos:Auto[]=[]

  // show every car as soon as the parent gives us the list
  ngOnChanges(changes: SimpleChanges) {
    if (changes['autos']) {
      this.selectedAutos = this.autos;
    }
  }

  selectAutos(selectedBrand:string){
    if (selectedBrand) {
      this.selectedAutos = this.autos.filter(
          x => x.brand.toLowerCase().startsWith(selectedBrand.toLowerCase()))
    }
    else {
      this.selectedAutos = this.autos
    }
  }

  selectCar(auto: Auto) {
    this.onSelectCar.emit(auto);
  }

  toggleFavorite(auto: Auto) {
    this.onToggleFavorite.emit(auto);
  }
  
}
