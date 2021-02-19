import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor() { }

  saveForm(data: object): void{
    console.log('Data sent: ', data)
  }

  signing(data: object): void{
    console.log('Data sent: ', data)
  }
}
