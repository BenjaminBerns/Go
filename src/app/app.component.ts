import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { CelluleComponent } from './cellule/cellule.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, BoardComponent, CelluleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jeu-de-go';
}
