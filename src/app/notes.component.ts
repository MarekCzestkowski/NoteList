import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Note }                from './note';
import { NoteService }         from './note.service';

@Component({
  selector: 'my-notes',
  templateUrl: './notes.component.html',
  styleUrls: [ './notes.component.css' ]
})
export class NotesComponent implements OnInit {
  notes: Note[];
  selectedNote: Note;

  constructor(
    private noteService: NoteService,
    private router: Router) { }

  getNotes(): void {
    this.noteService
        .getNotes()
        .then(notes => this.notes = notes);
  }

  add(name: string,contents:string): void {
    name = name.trim();
    contents = contents.trim();
    if (!name && !contents) { return; }
    this.noteService.create(name,contents)
      .then(note => {
        this.notes.push(note);
        this.selectedNote = null;
      });
  }

  delete(note: Note): void {
    this.noteService
        .delete(note.id)
        .then(() => {
          this.notes = this.notes.filter(h => h !== note);
          if (this.selectedNote === note) { this.selectedNote = null; }
        });
  }

  ngOnInit(): void {
    this.getNotes();
  }

  onSelect(note: Note): void {
    this.selectedNote = note;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedNote.id]);
  }
}

