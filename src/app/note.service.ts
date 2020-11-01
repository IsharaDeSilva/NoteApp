import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Note } from './add-note/note';
import { Observable } from 'rxjs';
import { VNote } from './view-note/v-note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http:HttpClient) { 

  }
  add(note:Note){
    return this.http.post<any>("http://dev.aspitio.com:82/api/note",note);
  }

  getNotes():Observable<VNote[]>{
    return this.http.get<VNote[]>("http://dev.aspitio.com:82/api/note/user/:1");
  }
}
