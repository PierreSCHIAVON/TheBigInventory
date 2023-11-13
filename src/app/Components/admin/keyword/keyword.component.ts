import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Keyword } from 'src/app/Models/keyword.model';
import { KeywordService } from 'src/app/Service/keyword.service';

@Component({
  selector: 'app-keyword',
  templateUrl: './keyword.component.html',
  styleUrls: ['./keyword.component.scss']
})
export class KeywordComponent {

  keywordList: Keyword[] = [];
  keyword: Keyword = { id: 0, name: '' }; 
  keywordName: string = '';

  constructor(private http: HttpClient, private keywordService: KeywordService) {}

  ngOnInit(): void {
    this.getAllKeywords();
  }

  submitKeywordForm() {
    this.keywordService.createKeyword({ name: this.keywordName }).subscribe({
      next: (createdKeyword: Keyword) => {
        this.getAllKeywords();
      },
      error: (error: any) => {
        console.error('Erreur lors de la création du Keyword', error);
      },
      complete: () => {
      },
    });
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

  getKeywordById(id: number): void {
    this.keywordService.getKeywordById(id).subscribe((result) => {
      this.keyword = result;
    });
  }

  updateKeyword(keyword: Keyword): void {
    console.log('Updating keyword:', keyword);
  
    this.keywordService.updateKeyword(keyword).subscribe({
      next: (updatedKeyword: Keyword) => {
        console.log('Keyword updated successfully:', updatedKeyword);
        this.getAllKeywords();
      },
      error: (error: any) => {
        console.error('Erreur lors de la mise à jour du Keyword', error);
      },
    });
  }
  

  deleteKeyword(id: number): void {
    this.keywordService.deleteKeyword(id).subscribe({
      next: () => {
        this.getAllKeywords();
      },
      error: (error: any) => {
        console.error('Erreur lors de la suppression du Keyword', error);
      }
    });
  }
}
