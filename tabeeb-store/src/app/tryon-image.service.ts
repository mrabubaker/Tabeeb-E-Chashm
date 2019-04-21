import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TryonImageService {

  private image: any;

  setImage(image) {
    this.image = image;
  }

  getImage() {
    return this.image;
  }

  constructor() { }
}
