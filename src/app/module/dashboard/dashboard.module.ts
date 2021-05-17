import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { DashboardComponent } from '../../module/dashboard/dashboard.component';
import { AddComponent } from '../../module/add/add.component';
import { TutorialsComponent } from '../../module/tutorials/tutorials.component';
import { TutorialsService } from '../../services/tutorials.service';
import { FormsModule } from '@angular/forms';
import {UtilService} from  '../../services/util.service';
import { FilterPipe } from '../../pipes/filter.pipe';



@NgModule({
  declarations: [
    NavbarComponent,
    DashboardComponent,
    AddComponent,
    TutorialsComponent,
    FilterPipe 
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers:[TutorialsService,UtilService]
})
export class DashboardModule { }
