import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Soldier } from 'src/app/Models/soldier.model';
import { SoldierService } from 'src/app/Service/soldier.service';

@Component({
  selector: 'app-soldier',
  templateUrl: './soldier.component.html',
  styleUrls: ['./soldier.component.scss']
})
export class SoldierComponent {

  soldierList: Soldier[] = [];
  soldier: Soldier = { id_soldier: 0, name: '', points:0}; 
  soldierName: string = '';
  soldierPoints: number = 0;

  constructor(private http: HttpClient, private soldierService: SoldierService) {}

  ngOnInit(): void {
    this.getAllSoldiers();
  }

  submitSoldierForm() {
    this.soldierService.createSoldier({ name: this.soldierName, points : this.soldierPoints }).subscribe({
      next: (createdSoldier: Soldier) => {
        this.getAllSoldiers();
      },
      error: (error: any) => {
        console.error('Erreur lors de la création du Soldat', error);
      },
      complete: () => {
      },
    });
  }

  getAllSoldiers() {
    this.soldierService.getAllSoldiers().subscribe({
      next: (data: Soldier[]) => {
        this.soldierList = data;
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

  getSoldierById(id: number): void {
    this.soldierService.getSoldierById(id).subscribe((result) => {
      this.soldier = result;
    });
  }

  updateSoldier(soldier: Soldier): void {
    this.soldierService.updateSoldier(soldier).subscribe({
      next: (updatedSoldier: Soldier) => {
        this.getAllSoldiers();
      },
      error: (error: any) => {
        console.error('Erreur lors de la mise à jour du soldat', error);
      },
    });
  }
  

  deleteSoldier(id: number): void {
    this.soldierService.deleteSoldier(id).subscribe({
      next: () => {
        this.getAllSoldiers();
      },
      error: (error: any) => {
        console.error('Erreur lors de la suppression du soldat', error);
      }
    });
  }

}
