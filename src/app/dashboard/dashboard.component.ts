import { Component, OnInit } from '@angular/core';

import { Note }        from '../services/note';
import { NoteService } from '../services/note.service';
import { RandomNumberService } from '../services/random.service';

@Component({
  selector:     'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  notes: Note[] = [];
  randomNumber: number;
  constructor(private noteService: NoteService, private randomService: RandomNumberService) { }

  ngOnInit(): void {
    this.noteService.getNotes()
      .then(notes => this.notes = notes.slice(0, 5));
	  this.randomNumber = this.randomService.getRandomNumber();
	  
  }
}
