import { Component, OnInit,ViewChild } from '@angular/core';
import {TutorialData } from './tutorial';
import { Router } from '@angular/router';
import { TutorialsService } from '../../services/tutorials.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  
  @ViewChild("addForm") addForm;

  tutorialData: any;
  addflag:boolean =true;
  addresult:any;
  constructor(private router: Router,private tutorialsService:TutorialsService) { 
    this.tutorialData = new TutorialData('','',0);
  }

  ngOnInit(): void {
  }


  addTutorail() {
      console.log("tutorialData "+ JSON.stringify(this.tutorialData));
      if(this.addForm.valid) {
        this.tutorialsService.addtutorial(this.tutorialData).subscribe(
          res => {
            console.log("res "+ JSON.stringify(res.body));
            this.addresult = res.body;
            this.addflag= false;
          }
        )
      }
     

  }


  calladdcomponent() {
    this.addflag= true;
    this.tutorialData = new TutorialData('','',0);
  }

}
