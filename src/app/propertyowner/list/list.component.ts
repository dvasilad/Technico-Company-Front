import { Component } from '@angular/core';
import { PropertyOwnerService } from '../../services/property-owner.service';
import { PropertyOwner } from '../../shared/model/property-owner';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  propertyOwners: PropertyOwner[] = [];

  constructor(private propertyOwnerService: PropertyOwnerService){
    propertyOwnerService.getAllPropertyOwners().subscribe((result: PropertyOwner[]) => {
      for (let propertyOwner of result){
        this.propertyOwners.push({
          id: propertyOwner.id,
          vatNumber: propertyOwner.vatNumber,
          name: propertyOwner.name,
          surname: propertyOwner.surname,
          address: propertyOwner.address,
          phoneNumber: propertyOwner.phoneNumber,
          email: propertyOwner.email,
          propertyList: propertyOwner.propertyList,
          loginUser: propertyOwner.loginUser
         })
      }
    })
  }
}
