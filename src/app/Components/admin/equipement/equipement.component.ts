import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Equipment } from 'src/app/Models/equipment.model';
import { EquipmentService } from 'src/app/Service/equipment.service';

@Component({
  selector: 'app-equipement',
  templateUrl: './equipement.component.html',
  styleUrls: ['./equipement.component.scss']
})
export class EquipementComponent {
  equipmentList: Equipment[] = [];
  equipment: Equipment = { id_equipment: 0, name: '', points:0}; 
  equipmentName: string = '';
  equipmentPoints: number = 0;

  constructor(private http: HttpClient, private equipmentService: EquipmentService) {}

  ngOnInit(): void {
    this.getAllEquipments();
  }

  submitEquipmentForm() {
    this.equipmentService.createEquipment({ name: this.equipmentName, points : this.equipmentPoints }).subscribe({
      next: (createdEquipment: Equipment) => {
        this.getAllEquipments();
      },
      error: (error: any) => {
        console.error('Erreur lors de la création de Equipment', error);
      },
      complete: () => {
      },
    });
  }

  getAllEquipments() {
    this.equipmentService.getAllEquipments().subscribe({
      next: (data: Equipment[]) => {
        this.equipmentList = data;
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

  getEquipmentById(id: number): void {
    this.equipmentService.getEquipmentById(id).subscribe((result) => {
      this.equipment = result;
    });
  }

  updateEquipment(equipment: Equipment): void {
    this.equipmentService.updateEquipment(equipment).subscribe({
      next: (updatedEquipment: Equipment) => {
        this.getAllEquipments();
      },
      error: (error: any) => {
        console.error('Erreur lors de la mise à jour de equipment', error);
      },
    });
  }
  

  deleteEquipment(id: number): void {
    // Vérifier si l'ID est valide
    if (id === null || id === undefined) {
      console.error('ID invalide :', id);
      return;
    }
  
    this.equipmentService.deleteEquipment(id).subscribe({
      next: () => {
        this.getAllEquipments();
      },
      error: (error: any) => {
        console.error('Erreur lors de la suppression du equipment', error);
      }
    });
  }
  
  
}
