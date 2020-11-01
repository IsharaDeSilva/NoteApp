import { Component, OnInit } from '@angular/core';
import { Note } from './note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  noteModel =new Note(1,"2019-08-08","","");

  constructor(private noteService:NoteService) { }

  onSubmit(){
    this.noteService.add(this.noteModel).subscribe(
      data =>console.log("Success",data),
      error =>console.log("Error is",error)
      )
  }

  ngOnInit() {
  }

}
