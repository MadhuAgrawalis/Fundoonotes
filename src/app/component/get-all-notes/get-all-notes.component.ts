import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/component/Services/notesServices/notes.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {


  constructor(private httpGetAllNote: NotesService) { }
  list: any = [];
  notes: any;
  noteList: any = [];

  ngOnInit(): void {
    this.getAllNotes();
  }
  getAllNotes() {    // Api integartion for api notes 
    this.httpGetAllNote.getNote().subscribe(
      (resp: any) => {


        this.notes = resp.data.data;
        console.log(resp);
        this.noteList = this.notes.filter((data: any) => {
          console.log(data.isDeleted)
          return data.isDeleted === false && data.isArchived === false;
        })
      },
      
      );
  }

  autoRefresh(data: any) {   // this for auoto Refresh 
    console.log("refresh", data);
    this.getAllNotes();
  }
  
  update(e: any) {
    console.log(e);
    this.getAllNotes();
  }
  trash(data: any) {
    console.log("refresh", data);
    this.getAllNotes();
  }
  archive(data: any) {
    console.log("refresh", data);
    this.getAllNotes();
  }
}


