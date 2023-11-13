import { Component, OnInit } from '@angular/core';
import { ArmyService } from 'src/app/Service/army.service';
import { Army } from 'src/app/Models/army.model';

@Component({
  selector: 'app-armylist',
  templateUrl: './armylist.component.html',
  styleUrls: ['./armylist.component.scss']
})
export class ArmylistComponent implements OnInit {
  armyList: Army[] = [];
  army: Army = { id_army: 0, name: '' }; 
  name : string ='';

  constructor(private armyService: ArmyService) {}

  ngOnInit(): void {
    this.getAllArmies();
  }

  getAllArmies() {
    this.armyService.getAllArmies().subscribe(
      (data: Army[]) => {
        this.armyList = data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  getArmyById(id: number): void {
    this.armyService.getArmyById(id).subscribe((result) => {
      this.army = result;
      console.log('Armée récupérée avec succès:', this.army);
    });
  }

  updateArmy(army:Army): void {
    this.armyService.updateArmy(this.army).subscribe((result) => {
      console.log('Armée mise à jour avec succès:', result);
    });
  }

  deleteArmy(id: number): void {
    this.armyService.deleteArmy(id).subscribe(() => {
      console.log('Armée supprimée avec succès.');
    });
  }
}
