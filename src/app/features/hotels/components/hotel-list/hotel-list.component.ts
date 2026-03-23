import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hotel-list',
  standalone: true,
  templateUrl: './hotel-list.component.html',
  styleUrl: './hotel-list.component.scss',
})
export class HotelListComponent {
  @Input({ required: true }) hotels: Array<{ id: string; name: string; city: string }> = [];
}
