import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Note }        from './note';
import { NoteService } from './note.service';

@Component({
  selector: 'note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: [ './note-detail.component.css' ]
})
export class NoteDetailComponent implements OnInit {
  note: Note;

  constructor(
    private noteService: NoteService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.noteService.getNote(+params['id']))
      .subscribe(note => this.note = note);
  }

  save(): void {
    this.noteService.update(this.note)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
