import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-project',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-project.html',
  styleUrl: './add-project.css'
})
export class AddProject {
  @Output() projectAdded = new EventEmitter<any>();

  project = {
    name: '',
    description: '',
    status: '',
    tasks: [] as any[]
  };

  newTask = {
    title: '',
    priority: '',
    status: ''
  };

  onSubmit(projectForm: any) {
    if (projectForm.valid) {
      const newProject = {
        ...this.project,
        createdDate: new Date().toISOString().split('T')[0],
        tasks: [...this.project.tasks]
      };
      this.projectAdded.emit(newProject);
      console.log('Projet ajouté:', newProject);
      alert(`Le projet "${this.project.name}" a été créé avec succès !`);
      this.onReset(projectForm);
    }
  }

  onReset(projectForm: any) {
    projectForm.resetForm();
    this.project = {
      name: '',
      description: '',
      status: '',
      tasks: []
    };
    this.newTask = {
      title: '',
      priority: '',
      status: ''
    };
  }

  addTask() {
    if (this.newTask.title && this.newTask.priority && this.newTask.status) {
      this.project.tasks.push({ ...this.newTask });
      this.newTask = {
        title: '',
        priority: '',
        status: ''
      };
    }
  }

  removeTask(index: number) {
    this.project.tasks.splice(index, 1);
  }
}
