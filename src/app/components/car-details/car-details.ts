import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Auto } from '../../interfaces/auto';

@Component({
  imports: [],
  selector: 'app-car-details',
  styleUrl: './car-details.css',
  templateUrl: './car-details.html',
})
export class CarDetails {
  @Input() car!: Auto;

  @Output() onClose = new EventEmitter<void>();

  close() {
    this.onClose.emit();
  }
}
