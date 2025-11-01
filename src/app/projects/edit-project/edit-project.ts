import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-project',
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-project.html',
  styleUrl: './edit-project.css'
})
export class EditProject implements OnChanges {
  @Input() project: any;
  @Output() projectUpdated = new EventEmitter<any>();

  showForm = false;

  newTask = {
    title: '',
    priority: '',
    status: ''
  };

  ngOnChanges() {
    if (this.project) {
      if (!this.project.tasks) {
        this.project.tasks = [];
      }
      this.showForm = true;
    }
  }

  onSubmit(editForm: any) {
    if (editForm.valid) {
      this.projectUpdated.emit(this.project);
      alert(`Le projet "${this.project.name}" a été modifié avec succès !`);
      this.showForm = false;
    }
  }

  onCancel() {
    this.showForm = false;
  }

  addTask() {
    if (this.newTask.title && this.newTask.priority && this.newTask.status) {
      if (!this.project.tasks) {
        this.project.tasks = [];
      }
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
