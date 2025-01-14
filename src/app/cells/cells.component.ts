import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { GameService } from '../game.service';

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

  ngOnInit(): void {
    // Synchroniser les données au moment de l'initialisation
    this.table = this.gameService.table;
    this.ScoreN = this.gameService.ScoreN;
    this.ScoreB = this.gameService.ScoreB;
  }

  onCellClick(rowIndex: number, colIndex: number): void {
    this.gameService.Changement(rowIndex, colIndex);
    this.syncData();
  }
  
  onCellRightClick(event: MouseEvent, rowIndex: number, colIndex: number): void {
    event.preventDefault();
    this.gameService.onRightClick(event, rowIndex, colIndex); 
    this.syncData();
  }

  private syncData(): void {
    this.table = this.gameService.table;
    this.ScoreB = this.gameService.ScoreB;
    this.ScoreN = this.gameService.ScoreN;
  }
}
