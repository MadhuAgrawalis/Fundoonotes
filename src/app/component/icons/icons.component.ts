import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { NotesService} from 'src/app/component/Services/notesServices/notes.service';
import { ActivatedRoute } from '@angular/router';
import { ArchiveComponent } from '../archive/archive.component';
import { TrashComponent } from '../trash/trash.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteCard: any;
  @Output() trashNoteToRefresh = new EventEmitter<any>();
  @Output() archiveNoteToRefresh = new EventEmitter<any>();
  
  noteId: any;
  id: any;
  isArchiveNotesComponent = false;
  isTrashNotesComponent = false;
  constructor(private noteService: NotesService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.noteCard)
    let Component = this.router.snapshot.component;
    if (Component == ArchiveComponent) {
      this.isArchiveNotesComponent = true;
      console.log(this.isArchiveNotesComponent);
    }
    if (Component == TrashComponent) {
      this.isTrashNotesComponent = true;
      console.log(this.isTrashNotesComponent);
    }
  }
  Deletenote() {
    let reqdata = {
      noteIdList: [this.noteCard.id],
      isDeleted: true,
    }
    this.noteService.deleteNote(reqdata).subscribe((response: any) => {
      console.log('Delete Notes', response); 
      this.trashNoteToRefresh.emit(Response)
    })
  }

  Onarchive() {
    let reqdata = {
      noteIdList: [this.noteCard.id],
      isArchived: true,
    }
    this.noteService.archiveNote(reqdata).subscribe((response: any) => {
      console.log('Archived Notes', response);
      this.archiveNoteToRefresh.emit(Response)
    })
  }

  Unarchive() {
    let reqdata = {
      noteIdList: [this.noteCard.id],
      isArchived: false
    }
    this.noteService.archiveNote(reqdata).subscribe((response: any) => {
      console.log('Unarchived Notes', response);
      

    })
  }

  Deleteforever() {
    let reqdata = {
      noteIdList: [this.noteCard.id],
      isDeleted: true,
    }
    this.noteService.deleteForever(reqdata).subscribe((response: any) => {
      console.log(' Deleteforever', response);
     
    })
  }

  Restorenote() {
    let reqdata = {
      noteIdList: [this.noteCard.id],
      isDeleted: false,
    }
    this.noteService.deleteNote(reqdata).subscribe((response: any) => {
      console.log('Restorenote', response);
      
    })
  }
}
