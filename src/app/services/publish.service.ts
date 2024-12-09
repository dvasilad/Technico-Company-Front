import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PropertyOwner } from '../shared/model/property-owner';


@Injectable({
  providedIn: 'root'
})
export class PublishService {
  publisher = new Subject<PropertyOwner>();
  constructor() { }

  publishData(propertyOwnerToPublish: PropertyOwner){
    this.publisher.next(propertyOwnerToPublish);
  }

  listenForData(){
    return this.publisher.asObservable();
  }
}