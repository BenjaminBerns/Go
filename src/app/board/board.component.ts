import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { fromEvent, Subject, Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { CellsComponent } from '../cells/cells.component';
import { gsap } from 'gsap';
import { GameService } from '../game.service';

@Component({
  selector: 'app-board',  
  imports: [CellsComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {
  ScoreN: number = 0;
  ScoreB: number = 0;
  isVisible: boolean = false;
  valeur: number = 0;

  constructor(private gameService : GameService) {}

  private subscription: Subscription = new Subscription();

  onShowPlateau(): void {
    this.isVisible = true; // Change à True pour démarrer l'animation
    console.log(this.ScoreB + this.ScoreB)
    this.gameService.Reset();
  }

  skip(): void{
    this.gameService.Skip();
  }

  ngOnInit(): void{
    this.subscription.add(
      this.gameService.scoreBObs.subscribe((ScoreB: number) => {
        this.ScoreB = ScoreB;
      })
    );
    
    this.subscription.add(
      this.gameService.scoreNObs.subscribe((ScoreN: number) => {
        this.ScoreN = ScoreN;
      })
    );    

    this.subscription.add(
      this.gameService.partieEnCourObs.subscribe((partieEnCour: boolean) => {
        this.isVisible = partieEnCour;
      })
    ); 
  }    
}
