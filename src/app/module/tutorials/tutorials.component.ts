import { Component, OnInit,ViewChild } from '@angular/core';
import { TutorialsService } from '../../services/tutorials.service';
import { Router } from '@angular/router';
import {TutorialData } from '../add/tutorial';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.scss']
})
export class TutorialsComponent implements OnInit {

  @ViewChild("updateForm") updateForm;
  tutorialsdata:any=[];
  selected :any={
    "id":0,
    "title":'',
    "description":'',
    "published":0
  };
  tutorialflag:boolean=false;
  mainpageflag:boolean=true;
  tutorialData: any;
  updateFlag:boolean=false;
  updatedata:any;
  searchText = '';


  constructor(private router: Router,private tutorialsService:TutorialsService) { 
    this.tutorialData = new TutorialData('','',0);
  }

  ngOnInit(): void {
    this.tutorialsService.getAllTutorials().subscribe(
      res => {
        console.log("tutorials response "+ JSON.stringify(res.body));
        this.tutorialsdata = res.body;

      }
    );
  }


  onclickTutorial(data) {
    this.tutorialflag=true;
    this.selected = data;
    console.log("the selected data "+ JSON.stringify(this.selected));
    
  }

  edit(data) {
    this.mainpageflag =false;
    this.tutorialData = new TutorialData(data.title,data.description,data.published)
  }

  isActive(item) {
      return this.selected === item;
  };

  onpublished(id) {
    this.tutorialData.id = id;
    this.tutorialData.published=1;
      this.tutorialsService.updatetutorials(this.tutorialData).subscribe(
        res => {
          console.log("res "+ JSON.stringify(res.body))
        }
      )

  }
  onunpublished(id) {
    this.tutorialData.id = id;
    this.tutorialData.published=0;
      this.tutorialsService.updatetutorials(this.tutorialData).subscribe(
        res => {
          console.log("res "+ JSON.stringify(res.body))
        }
      )
  }

  deletetutorial(id) {
    this.tutorialsService.deletetutorial(id).subscribe(
      res => {
        console.log("res "+ JSON.stringify(res.body));
        this.updateFlag=true;
          this.updatedata = res.body;
          this.mainpageflag =true;
          this.tutorialsService.getAllTutorials().subscribe(
            res => {
              console.log("tutorials response "+ JSON.stringify(res.body));
              this.tutorialflag =false;
              this.tutorialsdata = res.body;

      
            }
          );
      }
    )
  }

  onRemoveall() {
    this.tutorialsService.deletealltutorial().subscribe(
      res => {
        console.log("res "+ JSON.stringify(res));
        this.tutorialsdata =[];
      }
    )
  }

  onUpdate(id){
    console.log("id "+ id);
    this.tutorialData.id = id;
      this.tutorialsService.updatetutorials(this.tutorialData).subscribe(
        res => {
          console.log("res "+ JSON.stringify(res.body))
         this.updateFlag=true;
          this.updatedata = res.body;
        }
      )
  }
}
