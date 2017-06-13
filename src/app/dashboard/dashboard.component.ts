import { Component, OnInit } from '@angular/core';

import { Note }        from '../note';
import { NoteService } from '../note.service';

@Component({
  selector:     'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  notes: Note[] = [];

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.noteService.getNotes()
      .then(notes => this.notes = notes.slice(0, 5));
  }
}
