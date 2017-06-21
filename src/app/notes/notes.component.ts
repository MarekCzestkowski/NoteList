import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Note }                from '../services/note';
import { NoteService }         from '../services/note.service';
import { RandomNumberService }     from '../services/random.service';

@Component({
  selector: 'my-notes',
  templateUrl: './notes.component.html',
  styleUrls: [ './notes.component.css' ]
})
export class NotesComponent implements OnInit {
  notes: Note[];
  selectedNote: Note;
  randomNumber: number;

  constructor(
    private noteService: NoteService,
    private randomService: RandomNumberService,
    private router: Router) { }


   getRandomNumber():void {
      this.randomNumber = this.randomService.getRandomNumber();
   } 

  getNotes(): void {
    this.noteService
        .getNotes()
        .then(notes => this.notes = notes);
  }

  add(name: string,contents:string, autor :string): void {
    name = name.trim();
    contents = contents.trim();
    if (!name && !contents) { return; }
    this.noteService.create(name,contents, autor)
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
    this.getRandomNumber();
  }

  onSelect(note: Note): void {
    this.selectedNote = note;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedNote.id]);
  }
}

