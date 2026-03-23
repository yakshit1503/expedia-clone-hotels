import { Component, inject } from '@angular/core';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelApiService } from '../services/hotel-api.service';

@Component({
  selector: 'app-hotel',
  standalone: true,
  imports: [HotelListComponent],
  templateUrl: './hotel.component.html',
  styleUrl: './hotel.component.scss',
})
export class HotelComponent {
  private readonly hotelApiService = inject(HotelApiService);

  protected readonly hotels = this.hotelApiService.getHotels();
}
