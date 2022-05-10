import { Component, OnInit ,Input, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';


@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {


  constructor(public dialog: MatDialog) { }
   @Input() notesArray:any= [];
  @Output() updateNoteToRefresh = new EventEmitter<any>();
  @Output() trashNoteToRefresh = new EventEmitter<any>();
  @Output() archiveNoteToRefresh = new EventEmitter<any>();

  @Output() getNoteList = new EventEmitter();

  list:any=[];
  noteList:any=[];
  noteId:any=[];
  title:any=[];
  description:any=[];

  ngOnInit(): void {
    console.log(this.notesArray);
    }

    openDialog(noteid:any) {
      const dialogRef = this.dialog.open(UpdatenoteComponent, {
        width: '530px',
        
        data: {
          noteid,
        },
      });
      dialogRef.afterClosed().subscribe((response:any) => {
        console.log('The dialog was closed');
        this.getNoteList.emit();
      });
    }
    
    trash(data: any) {
      console.log(data);
      this.trashNoteToRefresh.emit("hi")
    }
    archive(data: any) {
      console.log(data);
      this.archiveNoteToRefresh.emit("hi")
    }
  

}
