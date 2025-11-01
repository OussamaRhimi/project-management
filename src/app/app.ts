import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectList } from "./projects/project-list/project-list";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProjectList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent { }
