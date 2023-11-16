import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Paint } from 'src/app/Models/paint.model';
import { PaintService } from 'src/app/Service/paint.service';

@Component({
  selector: 'app-paint',
  templateUrl: './paint.component.html',
  styleUrls: ['./paint.component.scss']
})
export class PaintComponent {

  paintList: Paint[] = [];
  paint: Paint = { id_paint: 0, name: '' }; 
  paintName: string = '';

  constructor(private paintService: PaintService, private http : HttpClient) {}

  ngOnInit(): void {
    this.getAllPaints();
  }

  createPaint() {
    this.paintService.createPaint({ name: this.paintName }).subscribe({
      next: (createdPaint: Paint) => {
        this.getAllPaints();
      },
      error: (error: any) => {
        console.error('Erreur lors de la création du Keyword', error);
      },
      complete: () => {
      },
    });
  } 

  getAllPaints() {
    this.paintService.getAllPaints().subscribe({
      next: (data: Paint[]) => {
        this.paintList = data;
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

  getPaintById(id: number): void {
    this.paintService.getPaintById(id).subscribe((result) => {
      this.paint = result;
    });
  }

  updateKeyword(paint: Paint): void {
    this.paintService.updatePaint(paint).subscribe({
      next: (updatedPaint: Paint) => {
       
        this.getAllPaints();
      },
      error: (error: any) => {
        console.error('Erreur lors de la mise à jour du Keyword', error);
      },
    });
  }
  

  deletePaint(id: number): void {
    this.paintService.deletePaint(id).subscribe({
      next: () => {
        this.getAllPaints();
      },
      error: (error: any) => {
        console.error('Erreur lors de la suppression du Keyword', error);
      }
    });
  }

}
