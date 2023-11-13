import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Unit } from 'src/app/Models/unit.model';
import { UnitService } from 'src/app/Service/unit.service';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss']
})
export class UnitComponent {

  constructor(private http: HttpClient, private unitService : UnitService) {}

  unitList: Unit[] = [];
  unit: Unit = { id: 0, name: '' }; 
  unitName: string = '';

  ngOnInit(): void {
    this.getAllUnits();
  }

  submitUnitForm() {
    this.unitService.createUnit({ name: this.unitName }).subscribe({
      next: (createdUnit: Unit) => {
        this.getAllUnits();
      },
      error: (error: any) => {
        console.error('Erreur lors de la création de l\'unité', error);
      },
      complete: () => {
      },
    });
  }

  getAllUnits() {
    this.unitService.getAllUnits().subscribe({
      next: (data: Unit[]) => {
        this.unitList = data;
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

  getUnitById(id: number): void {
    this.unitService.getUnitById(id).subscribe((result) => {
      this.unit = result;
    });
  }

  updateUnit(unit: Unit): void {
    this.unitService.updateUnit(unit).subscribe({
      next: (updatedUnit: Unit) => {
        this.getAllUnits();
      },
      error: (error: any) => {
        console.error('Erreur lors de la mise à jour de l\'armée', error);
      },
    });
  }

  deleteUnit(id: number): void {
    this.unitService.deleteUnit(id).subscribe({
      next: () => {
        this.getAllUnits();
      },
      error: (error: any) => {
        console.error('Erreur lors de la suppression de l\'armée', error);
      }
    });
  }

}
