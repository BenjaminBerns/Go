import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Observable } from 'rxjs';
import { CellsComponent } from '../cells/cells.component';

@Component({
  selector: 'app-board',  
  imports: [NgFor, NgClass, CellsComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {
 
}
