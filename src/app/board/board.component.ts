import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-board',
  imports: [RouterOutlet, RouterModule, NgFor, NgClass, FormsModule, BoardComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {
  title = 'jeu-de-go';
  table: number[] = Array.from({ length: 9 });
  table2: number[] = Array.from({ length: 9 });

  tour: number = 0;
  isBackgroundBlack: boolean = false;

  test(): void{
    this.tour = 5;
  }

  Class(): string {
    if (this.tour === 1) {
      return 'black';  
    }
    if (this.tour === 2) {
      return 'white';  
    }
    return '';  
  }

  Changement(): void {
    if (this.tour === 1 || this.tour === 0) {
      this.tour = 2;  
    } else if (this.tour === 2) {
      this.tour = 1; 
    }
  }
}
