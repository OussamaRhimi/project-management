import { Component, Input } from '@angular/core';
import { TaskList } from '../task-list/task-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-detail',
  imports: [CommonModule, TaskList],
  templateUrl: './project-detail.html',
  styleUrls: ['./project-detail.css']
})
export class ProjectDetail {
  @Input() project: any = null;

  getProgress(): number {
    if (!this.project?.tasks || this.project.tasks.length === 0) {
      return 0;
    }
    const completed = this.project.tasks.filter((t: any) => t.status === 'Terminé').length;
    return (completed / this.project.tasks.length) * 100;
  }
}