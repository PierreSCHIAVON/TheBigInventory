import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Army } from 'src/app/Models/army.model';
import { ArmyService } from 'src/app/Service/army.service';

@Component({
  selector: 'app-army',
  templateUrl: './army.component.html',
  styleUrls: ['./army.component.scss']
})
export class ArmyComponent {

  armyList: Army[] = [];
  army: Army = { id: 0, name: '' }; 
  armyName: string = '';

  constructor(private http: HttpClient, private armyService: ArmyService) {}

  ngOnInit(): void {
    this.getAllArmies();
  }

  submitArmyForm() {
    this.armyService.createArmy({ name: this.armyName }).subscribe({
      next: (createdArmy: Army) => {
        this.getAllArmies();
      },
      error: (error: any) => {
        console.error('Erreur lors de la création de l\'armée', error);
      },
      complete: () => {
      },
    });
  }

  getAllArmies() {
    this.armyService.getAllArmies().subscribe({
      next: (data: Army[]) => {
        this.armyList = data;
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

  getArmyById(id: number): void {
    this.armyService.getArmyById(id).subscribe((result) => {
      this.army = result;
    });
  }

  updateArmy(army: Army): void {
    this.armyService.updateArmy(army).subscribe({
      next: (updatedArmy: Army) => {
        this.getAllArmies();
      },
      error: (error: any) => {
        console.error('Erreur lors de la mise à jour de l\'armée', error);
      },
    });
  }

  deleteArmy(id: number): void {
    this.armyService.deleteArmy(id).subscribe({
      next: () => {
        this.getAllArmies();
      },
      error: (error: any) => {
        console.error('Erreur lors de la suppression de l\'armée', error);
      }
    });
  }

}
