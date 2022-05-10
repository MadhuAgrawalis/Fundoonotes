import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/component/Services/notesServices/notes.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
   notesarchive: any
  constructor(private noteService: NotesService) { }

  ngOnInit(): void {
    this.GetAllArchiveNotes()
  }

  GetAllArchiveNotes() {
    this.noteService.getArchiveNote().subscribe((response: any) => {
      this.notesarchive = response.data.data;
      console.log(this.notesarchive);
    },)
  }
  unarchive(e:any){ 
    this.GetAllArchiveNotes();
   }
}
