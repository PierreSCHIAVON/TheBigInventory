import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Appartenir } from 'src/app/Models/appartenir.model';
import { Keyword } from 'src/app/Models/keyword.model';
import { Unit } from 'src/app/Models/unit.model';
import { AppartenirService } from 'src/app/Service/appartenir.service';
import { KeywordService } from 'src/app/Service/keyword.service';
import { UnitService } from 'src/app/Service/unit.service';

@Component({
  selector: 'app-appartenir',
  templateUrl: './appartenir.component.html',
  styleUrls: ['./appartenir.component.scss']
})
export class AppartenirComponent {

  appartenirList: Appartenir[] = [];
  unitList: Unit[] = [];
  keywordList: Keyword[] = [];
  appartenir: Appartenir = { id_appartenir: 0, id_unit: 0, id_keyword: 0 };
  unitName: string = '';
  selectedKeywordId: number | undefined;
  selectedUnitId: number | undefined;
  


  constructor(private http: HttpClient, private appartenirService: AppartenirService, private unitService : UnitService, private keywordService : KeywordService) {}

  ngOnInit(): void {
    this.getAllAppartenir();
    this.getAllUnits();
    this.getAllKeywords();
  }

  submitAppartenirForm() {
  console.log('selectedKeywordId:', this.selectedKeywordId);
  console.log('selectedUnitId:', this.selectedUnitId);

    if (this.selectedUnitId !== undefined && this.selectedKeywordId !== undefined) {
      const appartenirData: {
        id_unit: number;
        id_keyword: number;
      } = {
        id_unit: this.selectedUnitId,
        id_keyword: this.selectedKeywordId
      };
      this.appartenirService.createAppartenir(appartenirData).subscribe({
        next: (createdAppartenir: Appartenir) => {
          this.getAllAppartenir();
          this.getAllUnits();
          this.getAllKeywords();
        },
        error: (error: any) => {
          console.error('Erreur lors de la création de l\'appartenance', error);
        },
        complete: () => {
        },
      });
    } else {
      console.error('Les valeurs de selectedUnitId et/ou selectedKeywordId sont undefined.');
    }
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

  getAllAppartenir() {
    this.appartenirService.getAllAppartenir().subscribe({
      next: (data: Appartenir[]) => {
        this.appartenirList = data;
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }


  updateAppartenir(appartenir: Appartenir): void {
    if (appartenir.id_appartenir !== null && appartenir.id_appartenir !== undefined) {
      this.appartenirService.updateAppartenir(appartenir).subscribe({
        next: (updatedAppartenir: Appartenir) => {
          this.getAllAppartenir();
        },
        error: (error: any) => {
          console.error('Erreur lors de la mise à jour de appartenir', error);
        },
      });
    } else {
      console.error('Erreur: id_appartenir est null ou undefined.');
    }
  }
  
  deleteAppartenir(id: number): void {
    if (id !== null && id !== undefined) {
      this.appartenirService.deleteAppartenir(id).subscribe({
        next: () => {
          this.getAllAppartenir();
        },
        error: (error: any) => {
          console.error('Erreur lors de la suppression du equipment', error);
        }
      });
    } else {
      console.error('Erreur: id est null ou undefined.');
    }
  }
  

}
