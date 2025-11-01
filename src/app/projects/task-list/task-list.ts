import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightStatus } from '../../highlight-status';
import { PriorityColorPipe } from '../../priority-color-pipe';  // New: Import the pipe
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule, HighlightStatus, PriorityColorPipe, LucideAngularModule],  // New: Add here
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css']
})
export class TaskList {
  @Input() tasks: { title: string; priority: string; status: string }[] = [];
}