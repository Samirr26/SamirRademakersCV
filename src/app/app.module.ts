import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {RouterModule, Routes} from "@angular/router";
import { HomepageComponent } from './components/homepage/homepage.component';
import {MatDividerModule} from '@angular/material/divider';
import { ProjectsComponent } from './components/projects/projects.component';
import {MatIconModule} from '@angular/material/icon';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';




const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'aboutme', component: AboutmeComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'contact', component: ContactComponent}


]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    ProjectsComponent,
    AboutmeComponent,
    SkillsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatDividerModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
