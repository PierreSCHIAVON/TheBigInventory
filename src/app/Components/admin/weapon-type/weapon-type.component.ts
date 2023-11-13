import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Weapon_Type } from 'src/app/Models/weapon_type.model';
import { WeaponTypeService } from 'src/app/Service/weapon-type.service';

@Component({
  selector: 'app-weapon-type',
  templateUrl: './weapon-type.component.html',
  styleUrls: ['./weapon-type.component.scss']
})
export class WeaponTypeComponent {

  weaponTypeList: Weapon_Type[] = [];
  weaponType: Weapon_Type = { id: 0, name: '' }; 
  weaponTypeName: string = '';

  constructor(private http: HttpClient, private weaponTypeService: WeaponTypeService) {}

  ngOnInit(): void {
    this.getAllWeaponTypes();
  }

  submitWeaponTypeForm() {
    this.weaponTypeService.createWeaponType({ name: this.weaponTypeName }).subscribe({
      next: (createdWeaponType: Weapon_Type) => {
        this.getAllWeaponTypes();
      },
      error: (error: any) => {
        console.error('Erreur lors de la création du Keyword', error);
      },
      complete: () => {
      },
    });
  }

  getAllWeaponTypes() {
    this.weaponTypeService.getAllWeaponTypes().subscribe({
      next: (data: Weapon_Type[]) => {
        this.weaponTypeList = data;
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

  getWeaponTypeById(id: number): void {
    this.weaponTypeService.getWeaponTypeById(id).subscribe((result) => {
      this.weaponType = result;
    });
  }

  updateWeaponType(weaponType: Weapon_Type): void {
    this.weaponTypeService.updateWeaponType(weaponType).subscribe({
      next: (updatedWeaponType: Weapon_Type) => {
        this.getAllWeaponTypes();
      },
      error: (error: any) => {
        console.error('Erreur lors de la mise à jour du Weapon Type', error);
      },
    });
  }
  

  deleteWeaponType(id: number): void {
    this.weaponTypeService.deleteWeaponType(id).subscribe({
      next: () => {
        this.getAllWeaponTypes();
      },
      error: (error: any) => {
        console.error('Erreur lors de la suppression du Keyword', error);
      }
    });
  }

}
