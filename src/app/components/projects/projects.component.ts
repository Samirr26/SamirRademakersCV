import { Component, OnInit } from '@angular/core';
import {Projects, Project} from "../../project-list";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = Projects;
  counter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  previousProject(){
    if(!(this.counter - 1 < 0)){
      this.counter = this.counter - 1;
    } else this.counter = this.projects.length - 1;
  }

  nextProject(){
    if(!(this.counter + 1 > this.projects.length-1)){
      this.counter++;
    } else this.counter = 0;
  }

}
