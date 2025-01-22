import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { GameService } from '../game.service';
import { Subject, Subscription } from 'rxjs';
import { BoardComponent } from '../board/board.component';

@Component({
  selector: 'app-cells',
  imports: [NgClass, NgFor],
  templateUrl: './cells.component.html',
  styleUrl: './cells.component.css'
})
export class CellsComponent {
 
  constructor(public gameService: GameService) { }

  table: number[][] = [];
  ScoreN: number = 0;
  ScoreB: number = 0;
  temporalite: cellule[] = [];
  endGame: boolean = true;

  private subscription: Subscription = new Subscription();
 
  ngOnInit(): void {
    // Synchroniser les données au moment de l'initialisation
    this.table = this.gameService.table;
    this.ScoreN = this.gameService.ScoreN;
    this.ScoreB = this.gameService.ScoreB;

    this.subscription.add(
      this.gameService.partieEnCourObs.subscribe((partieEnCour: boolean) => {
        this.endGame = partieEnCour;
      })
    ); 
  }

  onCellClick(rowIndex: number, colIndex: number): void {
    this.gameService.Changement(rowIndex, colIndex);
  }
  
  onCellRightClick(event: MouseEvent, rowIndex: number, colIndex: number): void {
    this.gameService.onRightClick(event, rowIndex, colIndex); 
  }
}

export class cellule {
    constructor(public col: number, public row: number) {
      
    }
  }