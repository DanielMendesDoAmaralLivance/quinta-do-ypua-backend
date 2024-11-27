export interface Accommodation {
  name: string;
  description: string;
  pricePerNight: number;
  checkin: string;
  checkout: string;
  guests: number;
  beds: number;
  minNights: number;
  active: boolean;
}
