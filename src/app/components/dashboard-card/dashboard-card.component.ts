import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../../interfaces/note';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss']
})
export class DashboardCardComponent implements OnInit {
@Input() note!: Note;
@Input() i!: number;
  constructor() { }

  ngOnInit() {
  }

}
