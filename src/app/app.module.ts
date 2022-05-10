import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {MatFormFieldModule} from '@angular/material/form-field';
import{MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule } from "@angular/material/card";
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatNativeDateModule } from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisteretionComponent } from './component/registeretion/registeretion.component';
import { LoginComponent } from './component/login/login.component';


import { FlexLayoutModule } from '@angular/flex-layout';

import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { DashBoardComponent } from './component/dash-board/dash-board.component';
import { TakenoteComponent } from './component/takenote/takenote.component';
import { IconsComponent } from './component/icons/icons.component';
import { UpdatenoteComponent } from './component/updatenote/updatenote.component';
import { DisplaynoteComponent } from './component/displaynote/displaynote.component';
import { GetAllNotesComponent } from './component/get-all-notes/get-all-notes.component';
import { ArchiveComponent } from './component/archive/archive.component';
import { TrashComponent } from './component/trash/trash.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisteretionComponent,
    LoginComponent,
    
    ResetpasswordComponent,
         ForgotPasswordComponent,
         DashBoardComponent,
         TakenoteComponent,
         IconsComponent,
         UpdatenoteComponent,
         DisplaynoteComponent,
         GetAllNotesComponent,
         ArchiveComponent,
         TrashComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    // MatFormFieldModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule ,
    MatMenuModule,
    MatDialogModule,
    FormsModule,
    MatExpansionModule,
    MatNativeDateModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
