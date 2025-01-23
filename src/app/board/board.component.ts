import { NgClass, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { fromEvent, Subject, Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { CellsComponent } from '../cells/cells.component';
import { gsap } from 'gsap';
import { GameService } from '../game.service';

@Component({
  selector: 'app-board',  
  imports: [CellsComponent, NgFor, NgClass],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {
  ScoreN: number = 0;
  ScoreB: number = 0;
  isVisible: boolean = false;
  lengthchoice: boolean = false;
  valeur: number = 0;
  LB: number = 9;
  plateau: number[][] = [];

  loaded: boolean = false;

  constructor(private gameService : GameService) {}

  private subscription: Subscription = new Subscription();

  onShowPlateau(): void {
    this.lengthchoice = true; // Change à True pour démarrer l'animation
    console.log(this.ScoreB + this.ScoreB)
    this.gameService.Reset();
  }

  board(tailletableau: number): void{
    this.plateau = Array.from({ length: tailletableau - 1 }, () => Array(tailletableau - 1).fill(0));
    this.lengthchoice = false; 
    this.LB = tailletableau;
    this.gameService.SetLength(tailletableau);
    this.isVisible = true;
  } 

  skip(): void{
    this.gameService.Skip();
  }

  saveGame(){
    this.gameService.saveCopy();
  }

  loadGame(){
    this.gameService.loadCopy();
    this.loaded = true;
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
