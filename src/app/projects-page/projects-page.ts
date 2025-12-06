import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectList } from "../projects/project-list/project-list";
import { AddProject } from "../projects/add-project/add-project";
import { EditProject } from "../projects/edit-project/edit-project";

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [ProjectList, AddProject, EditProject],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <header class="max-w-4xl mx-auto text-center mb-10">
        <h1 class="text-4xl font-extrabold text-indigo-700 drop-shadow-sm">
          Gestion de Projets
        </h1>
        <p class="text-gray-600 mt-2">Suivi des projets et des tâches</p>
      </header>

      <main class="max-w-4xl mx-auto space-y-8">
        <app-add-project (projectAdded)="onProjectAdded($event)"></app-add-project>
        <app-edit-project [project]="selectedProject" (projectUpdated)="onProjectUpdated($event)"></app-edit-project>
        <app-project-list [projects]="projects" (projectSelected)="onSelectProject($event)"></app-project-list>
      </main>
    </div>
  `
})
export class ProjectsPageComponent implements OnInit {
  selectedProject: any = null;

  projects: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.http.get<any[]>('http://localhost:3001/projects').subscribe({
      next: (data) => {
        this.projects = data;
      },
      error: (error) => {
        console.error('Error loading projects:', error);
      }
    });
  }

  onSelectProject(project: any) {
    this.selectedProject = project;
  }

  onProjectAdded(newProject: any) {
    this.http.post('http://localhost:3001/projects', newProject).subscribe({
      next: () => {
        this.loadProjects(); // Reload to get the new project with ID
      },
      error: (error) => {
        console.error('Error adding project:', error);
      }
    });
  }

  onProjectUpdated(updatedProject: any) {
    this.http.put(`http://localhost:3001/projects/${updatedProject.id}`, updatedProject).subscribe({
      next: () => {
        this.projects = this.projects.map(p => p.id === updatedProject.id ? updatedProject : p);
      },
      error: (error) => {
        console.error('Error updating project:', error);
      }
    });
  }
}
