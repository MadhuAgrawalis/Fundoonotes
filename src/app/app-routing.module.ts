import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisteretionComponent } from './component/registeretion/registeretion.component';
import { LoginComponent } from './component/login/login.component';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import {DashBoardComponent} from './component/dash-board/dash-board.component';
import {TakenoteComponent} from './component/takenote/takenote.component';
import {UpdatenoteComponent} from './component/updatenote/updatenote.component';
import {IconsComponent} from './component/icons/icons.component';
import {DisplaynoteComponent} from './component/displaynote/displaynote.component';
import {ArchiveComponent} from './component/archive/archive.component';
import {GetAllNotesComponent} from './component/get-all-notes/get-all-notes.component';
import {TrashComponent} from './component/trash/trash.component';



const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisteretionComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'resetpassword/:token',component:ResetpasswordComponent},
  {path: 'dashboard', component: DashBoardComponent,

    children: [
      { path: '', redirectTo: 'notes', pathMatch: 'full', },
      { path: "notes", component: GetAllNotesComponent, },
      { path: "trash", component: TrashComponent },
      { path: "archive", component: ArchiveComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }









 
  
  
  