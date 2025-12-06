import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskList } from '../task-list/task-list';
import { ProjectDetail } from '../project-detail/project-detail';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-project-list',
  imports: [CommonModule, FormsModule, TaskList, ProjectDetail],
  templateUrl: './project-list.html',
  styleUrls: ['./project-list.css']
})
export class ProjectList {
  @Input() projects: any[] = [];
  @Output() projectSelected = new EventEmitter<any>();

  selectedProject: any = null;
  searchTerm: string = '';
  filterBy: string = 'all'; // New: Controls filter field

  get projectList() {
    return this.projects;
  }

  onSelectProject(project: any) {
    this.selectedProject = project;
    this.projectSelected.emit(project);
  }

  onEditProject(project: any) {
    this.selectedProject = project;
    this.projectSelected.emit(project);
  }

  get filteredProjects() {
    const projectsToFilter = this.projectList;
    if (!this.searchTerm) return projectsToFilter;
    const term = this.searchTerm.toLowerCase();
    return projectsToFilter.filter(project => {
      if (this.filterBy === 'all') {
        // Multi-field search (original enhanced logic)
        return (
          project.name.toLowerCase().includes(term) ||
          project.description.toLowerCase().includes(term) ||
          project.status.toLowerCase().includes(term) ||
          project.tasks.some((t: any) =>
            t.title.toLowerCase().includes(term) ||
            t.priority.toLowerCase().includes(term) ||
            t.status.toLowerCase().includes(term)
          )
        );
      } else if (this.filterBy === 'name') {
        return project.name.toLowerCase().includes(term);
      } else if (this.filterBy === 'description') {
        return project.description.toLowerCase().includes(term);
      } else if (this.filterBy === 'status') {
        return project.status.toLowerCase().includes(term);
      } else if (this.filterBy === 'tasks') {
        return project.tasks.some((t: any) =>
          t.title.toLowerCase().includes(term) ||
          t.priority.toLowerCase().includes(term) ||
          t.status.toLowerCase().includes(term)
        );
      }
      return false;
    });
  }

  getProjectProgress(project: any): number {
    if (!project.tasks || project.tasks.length === 0) {
      return 0;
    }
    const completed = project.tasks.filter((t: any) => t.status === 'Terminé').length;
    return (completed / project.tasks.length) * 100;
  }
}
