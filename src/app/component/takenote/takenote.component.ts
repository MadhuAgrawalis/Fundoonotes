import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { NotesService } from 'src/app/component/Services/notesServices/notes.service';

@Component({
  selector: 'app-takenote',
  templateUrl: './takenote.component.html',
  styleUrls: ['./takenote.component.scss']
})
export class TakenoteComponent implements OnInit {
  description:any;
  title:any;
  isVisible:boolean=true;
  constructor(private httpAddNote: NotesService) { }

  @Output() getNoteList = new EventEmitter();

  ngOnInit(): void {
  }

  fieldClick(){
    this.isVisible=!this.isVisible;
  }

  addnote(title: { value: string; },description: { value: string; }){
    if(title.value===''||description.value===''){
      this.fieldClick();
    }
    else{
      this.fieldClick();
      var noteData = {
        title: title.value,
        description: description.value,
      };
      this.httpAddNote.createNote(noteData).subscribe((response:any) => {
          console.log(response);
           this.getNoteList.emit();
        },)        
        }
      
    }    
  }




