import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { CelluleComponent } from './cellule/cellule.component';
import { NgClass, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, NgFor, NgClass, FormsModule, BoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}
