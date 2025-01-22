import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  vanish: number = 0;
  ScoreN: number = 0;
  ScoreB: number = 0;
  skip: number = 0;
  partieEnCour: boolean = true;

  title = 'jeu-de-go';
  table: number[][] = Array.from({ length: 9 }, () => Array(9).fill(0));
  table2: number[] = Array.from({ length: 9 });

  tour: number = 0;

  private ScoreBSubject = new Subject<number>();
  private ScoreNSubject = new Subject<number>();
  private partieEnCourSubject = new Subject<boolean>();
  scoreBObs = this.ScoreBSubject.asObservable();
  scoreNObs = this.ScoreNSubject.asObservable();
  partieEnCourObs = this.partieEnCourSubject.asObservable();

  Changement(rowIndex: number, colIndex: number): void {
    if(this.partieEnCour == true){
      if (this.table[rowIndex][colIndex] === 0) { 
        if (this.tour === 1) {
          this.table[rowIndex][colIndex] = 2; // Si joueur 1 on mets 2 (2=blanc)
          this.tour = 2; // Passer aujoueur 2 
          this.skip = 0;
        } else {
          this.table[rowIndex][colIndex] = 1; // Si joueur 2 on mets 1 (1=noir)
          this.tour = 1; // Passer au joueur 1
          this.skip = 0;
        }
        this.table = [...this.table];  //mise à jour de la table (pas automatique)
      } 
    }
  }

  Reset(): void{
    for (let row = 0; row < this.table.length; row++) {
      for (let col = 0; col < this.table[row].length; col++) {
        this.table[row][col] = 0; // Remet chaque cellules à 0
      }
    }
    this.partieEnCour = true;
    this.ScoreB = 0;
    this.ScoreN = 0;
    this.ScoreBSubject.next(this.ScoreB);
    this.ScoreNSubject.next(this.ScoreN);
    this.skip = 0;
  }

  Skip(): void{
    if(this.skip < 2){
        if(this.tour === 1){
        this.tour = 2;
        this.skip = this.skip + 1;
        console.log("tour " + this.tour)
        console.log(this.skip);
      }
      else{
        this.tour = 1;
        this.skip = this.skip + 1;
        console.log("tour " + this.tour)
        console.log(this.skip);
      }
      if(this.skip === 2){
        this.partieEnCour = false;
        console.log(this.partieEnCour);
        this.partieEnCourSubject.next(this.partieEnCour);
      }
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
    this.ScoreBSubject.next(this.ScoreB);
    this.ScoreNSubject.next(this.ScoreN);
  }

  findCoordinates(value: number, table: number[][]): { x: number, y: number } | null {
    for (let y = 0; y < table.length; y++) {
      for (let x = 0; x < table[y].length; x++) {
        if (table[y][x] === value) {
          return { x, y };
        }
      }
    }
    return null; 
  }
}