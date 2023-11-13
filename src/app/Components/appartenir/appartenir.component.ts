import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Appartenir } from 'src/app/Models/appartenir.model';
import { AppartenirService } from 'src/app/Service/appartenir.service';

@Component({
  selector: 'app-appartenir',
  templateUrl: './appartenir.component.html',
  styleUrls: ['./appartenir.component.scss']
})
export class AppartenirComponent {

  appartenirList: Appartenir[] = [];
  appartenir: Appartenir = { id_appartenir: 0, id_unit:0,id_keyword:0}; 

  constructor(private http: HttpClient, private appartenirService: AppartenirService) {}

  ngOnInit(): void {
    this.getAllAppartenir();
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
    this.appartenirService.updateAppartenir(appartenir).subscribe({
      next: (updatedAppartenir: Appartenir) => {
        this.getAllAppartenir();
      },
      error: (error: any) => {
        console.error('Erreur lors de la mise à jour de appartenir', error);
      },
    });
  }
  

  deleteAppartenir(id: number): void {
    this.appartenirService.deleteAppartenir(id).subscribe({
      next: () => {
        this.getAllAppartenir();
      },
      error: (error: any) => {
        console.error('Erreur lors de la suppression du equipment', error);
      }
    });
  }

}
