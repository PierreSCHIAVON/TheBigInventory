import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Appartenir } from 'src/app/Models/appartenir.model';
import { Keyword } from 'src/app/Models/keyword.model';
import { Unit } from 'src/app/Models/unit.model';
import { AppartenirService } from 'src/app/Service/appartenir.service';
import { KeywordService } from 'src/app/Service/keyword.service';
import { UnitService } from 'src/app/Service/unit.service';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss']
})
export class UnitComponent {


  constructor(private http: HttpClient, private unitService : UnitService, private appartenirService : AppartenirService, private keywordService : KeywordService) {}

  unitList: Unit[] = [];
  unit: Unit = { id_unit: 0, name: '' }; 
  unitName: string = '';
  keywordId: number = 0 ;
  selectedKeywordId: number | undefined;
  keywordList: Keyword[] = [];
  

  ngOnInit(): void {
    this.getAllUnits();
    this.getAllKeywords();
  }

  getAllKeywords() {
    this.keywordService.getAllKeywords().subscribe({
      next: (data: Keyword[]) => {
        this.keywordList = data;
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

  submitUnitForm() {
    this.unitService.createUnit({ name: this.unitName }).subscribe({
      next: (createdUnit: Unit) => {
        // Appeler la fonction createAppartenir avec les paramètres nécessaires
        this.createAppartenir(createdUnit.id_unit, this.keywordId);
        this.getAllUnits();
      },
      error: (error: any) => {
        console.error('Erreur lors de la création de l\'unité', error);
      },
      complete: () => {
        // Code à exécuter après la création de l'unité et de l'appartenance
      },
    });
  }
  
  createAppartenir(unitId: number, keywordId: number) {
    this.appartenirService.createAppartenir({ id_unit: unitId, id_keyword: keywordId }).subscribe({
      next: (createdAppartenir: Appartenir) => {
        // Code à exécuter après la création de l'appartenance
      },
      error: (error: any) => {
        console.error('Erreur lors de la création de l\'appartenance', error);
      },
      complete: () => {
        // Code à exécuter après la création de l'appartenance
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
