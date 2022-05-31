import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toSkillsPage(){
    this.router.navigate(["skills"])
  }

  toProjectsPage(){
    this.router.navigate(["projects"])
  }

  toHomePage(){
    this.router.navigate([""])
  }

  toAboutmePage(){
    this.router.navigate(["aboutme"])

  }

  toContactPage(){
    this.router.navigate(["contact"])
  }


}
