import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Unit_Type } from 'src/app/Models/unit_type.model';
import { UnitTypeService } from 'src/app/Service/unit-type.service';

@Component({
  selector: 'app-unit-type',
  templateUrl: './unit-type.component.html',
  styleUrls: ['./unit-type.component.scss']
})
export class UnitTypeComponent {

  unitTypeList: Unit_Type[] = [];
  unitType: Unit_Type = { id_unittype: 0, name: '' }; 
  unitTypeName: string = '';

  constructor(private http: HttpClient, private unitTypeService: UnitTypeService) {}

  ngOnInit(): void {
    this.getAllUnitTypes();
  }

  submitUnitTypeForm() {
    this.unitTypeService.createUnitType({ name: this.unitTypeName }).subscribe({
      next: (createdUnitType: Unit_Type) => {
        this.getAllUnitTypes();
      },
      error: (error: any) => {
        console.error('Erreur lors de la création du Unit Type', error);
      },
      complete: () => {
      },
    });
  }

  getAllUnitTypes() {
    this.unitTypeService.getAllUnitTypes().subscribe({
      next: (data: Unit_Type[]) => {
        this.unitTypeList = data;
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

  getUnitTypeById(id: number): void {
    this.unitTypeService.getUnitTypeById(id).subscribe((result) => {
      this.unitType = result;
    });
  }

  updateUnitType(unitType: Unit_Type): void {
    this.unitTypeService.updateUnitType(unitType).subscribe({
      next: (updatedUnitType: Unit_Type) => {
        this.getAllUnitTypes();
      },
      error: (error: any) => {
        console.error('Erreur lors de la mise à jour du Unit Type', error);
      },
    });
  }
  

  deleteUnitType(id: number): void {
    this.unitTypeService.deleteUnitType(id).subscribe({
      next: () => {
        this.getAllUnitTypes();
      },
      error: (error: any) => {
        console.error('Erreur lors de la suppression du Unit Type', error);
      }
    });
  }

}
