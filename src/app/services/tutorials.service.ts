import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UtilService } from './util.service';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TutorialsService {

  url: any;
  
  constructor(private http: HttpClient,private utilService:UtilService) { 
    this.url =environment.backend;
  }


  addtutorial(data){
    const addurl = `${this.url}/api/tutorials/create`;
    return this.utilService.post(addurl, data);
  }


  getAllTutorials() {
    const addurl = `${this.url}/api/tutorials/getAllTutorials`;
    return this.utilService.get(addurl);
  }

  updatetutorials(data){
    const updateurl = `${this.url}/api/tutorials/updateTutorial/`+data.id;
    return this.utilService.put(updateurl,data);
  }

  published(data) {
    const updateurl = `${this.url}/api/tutorials/updateTutorial/`+data.id;
    return this.utilService.put(updateurl,data);
  }

  deletetutorial(id) {
    const deleteurl = `${this.url}/api/tutorials/deleteTutorial/`+id;
    return this.utilService.delete(deleteurl);
  }

  deletealltutorial() {
    const deleteurl = `${this.url}/api/tutorials/deleteallTutorial`;
    return this.utilService.delete(deleteurl);
  }
}
