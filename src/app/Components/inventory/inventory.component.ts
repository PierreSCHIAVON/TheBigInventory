import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Inventory } from 'src/app/Models/inventory.model';
import { Paint } from 'src/app/Models/paint.model';
import { InventoryService } from 'src/app/Service/inventory.service';
import { PaintService } from 'src/app/Service/paint.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent {

inventoryName: string ='';
inventoryList: Inventory[]=[];
inventory: Inventory = { id_inventory: 0, name: '' }; 
paint: Paint= { id_paint: 0, name: '' };  ;
paintName: string ='';
paintList: Paint[]=[];
selectedPaint: any;


constructor(private http:HttpClient, private inventoryService : InventoryService, private paintService : PaintService){}

ngOnInit(): void {
  this.getAllInventories();
  this.getAllPaints();
}

createInventory() {
  this.inventoryService.createInventory({ name: this.inventoryName }).subscribe({
    next: (createdInventory: Inventory) => {
      this.getAllInventories();
    },
    error: (error: any) => {
      console.error('Erreur lors de la création de l\'armée', error);
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

  getAllInventories() {
    this.inventoryService.getAllInventories().subscribe({
      next: (data: Inventory[]) => {
        this.inventoryList = data;
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

  getInventoryById(id: number): void {
    this.inventoryService.getInventoryById(id).subscribe((result) => {
      this.inventory = result;
    });
  }

  updateInventory(inventory: Inventory): void {
    this.inventoryService.updateInventory(inventory).subscribe({
      next: (updatedInventory: Inventory) => {
        this.getAllInventories();
      },
      error: (error: any) => {
        console.error('Erreur lors de la mise à jour de l\'armée', error);
      },
    });
  }

  deleteInventory(id: number): void {
    this.inventoryService.deleteInventory(id).subscribe({
      next: () => {
        this.getAllInventories();
      },
      error: (error: any) => {
        console.error('Erreur lors de la suppression de l\'armée', error);
      }
    });
  }

  addPaintToInventory() {
    throw new Error('Method not implemented.');
    }
}