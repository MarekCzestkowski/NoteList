import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Note }           from './note';

@Injectable()
export class NoteSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Note[]> {
    return this.http
               .get(`app/notes/?name=${term}`)
               .map(response => response.json().data as Note[]);
  }
}