import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class HotelApiService {
  getHotels(): Array<{ id: string; name: string; city: string }> {
    return [
      { id: '1', name: 'Lakeside Inn', city: 'Toronto' },
      { id: '2', name: 'Downtown Suites', city: 'Montreal' },
    ];
  }
}
