import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/component/Services/notesServices/notes.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  trashList: any;
  constructor(private noteService: NotesService) { }

  ngOnInit(): void {
    this.getTrashList();
  }

  getTrashList() {
    this.noteService.getTrashNote().subscribe((response: any) => {
      console.log("get all trash", response);
      this.trashList = response.data.data;
      console.log(this.trashList);
    },)
  }
  restoreNote(e:any){
    this.getTrashList();
  }
  trash(e:any){
    this.getTrashList();
  }
}