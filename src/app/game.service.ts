import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  vanish: number = 0;
  ScoreN: number = 0;
  ScoreB: number = 0;

  title = 'jeu-de-go';
  table: number[][] = Array.from({ length: 9 }, () => Array(9).fill(0));
  table2: number[] = Array.from({ length: 9 });

  tour: number = 0;

  Changement(rowIndex: number, colIndex: number): void {
    if (this.table[rowIndex][colIndex] === 0) { 
      if (this.tour === 1) {
        this.table[rowIndex][colIndex] = 2; // Si joueur 1 on mets 2 (2=blanc)
        this.tour = 2; // Passer aujoueur 2
      } else {
        this.table[rowIndex][colIndex] = 1; // Si joueur 2 on mets 1 (1=noir)
        this.tour = 1; // Passer au joueur 1
      }
      
      this.table = [...this.table];  //mise à jour de la table (pas automatique)
    }
  }

  onRightClick(event: MouseEvent, rowIndex: number, colIndex: number): void {
    event.preventDefault(); //ça gêne moins avec le clic droit qui déroule des options
      if (this.table[rowIndex][colIndex] === 2) { //augmenter le score noir pour chaques pions blanc capturer
        this.table[rowIndex][colIndex] = 0; 
        this.ScoreN += 1;
      } else if (this.table[rowIndex][colIndex] === 1) {//augmenter le score blanc pour chaques pions noir capturer
        this.table[rowIndex][colIndex] = 0;
        this.ScoreB += 1;
      }
      this.table = [...this.table];
  }
}
