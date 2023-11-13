import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Army } from 'src/app/Models/army.model';
import { Unit } from 'src/app/Models/unit.model';
import { ArmyService } from 'src/app/Service/army.service';
import { UnitService } from 'src/app/Service/unit.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  armyList: Army[] = [];
  army: Army = { id: 0, name: '' }; 
  unitList: Unit[] = [];
  unit: Unit = { id: 0, name: '' }; 
  unitName: string = '';
  armyName: string = '';

  constructor(private http: HttpClient, private armyService: ArmyService, private unitService : UnitService) {}

 

 
  

}
