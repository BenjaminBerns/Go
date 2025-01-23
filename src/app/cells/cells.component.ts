import { NgClass, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GameService } from '../game.service';
import { Subject, Subscription } from 'rxjs';
import { BoardComponent } from '../board/board.component';
import { on } from 'node:events';

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
  endGame: boolean = true;
  
  @Input() onLoad: boolean = false;

  private subscription: Subscription = new Subscription();
 
  ngOnInit(): void {
    // Synchroniser les données au moment de l'initialisation
    this.ScoreN = this.gameService.ScoreN;
    this.ScoreB = this.gameService.ScoreB;

    this.subscription.add(
      this.gameService.partieEnCourObs.subscribe((partieEnCour: boolean) => {
        this.endGame = partieEnCour;
      })
    ); 

    this.subscription.add(
      this.gameService.tableauObs.subscribe((tableau: number[][]) => {
        this.table = tableau;
      })
    ); 
  }

  if(onLoad = true){
    this.gameService.Changement(1, 1);
  }

  onCellClick(rowIndex: number, colIndex: number): void {
    this.gameService.Changement(rowIndex, colIndex);
  }
  
  onCellRightClick(event: MouseEvent, rowIndex: number, colIndex: number): void {
    this.gameService.onRightClick(event, rowIndex, colIndex); 
  }
  
}
