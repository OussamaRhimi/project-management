import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priorityColor',
  standalone: true  // Added: For standalone components
})
export class PriorityColorPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'Haute':
        return 'text-red-500';
      case 'Moyenne':
        return 'text-yellow-500';
      case 'Basse':
        return 'text-green-500';
      default:
        return 'text-gray-500';  // Fallback for unknown priorities
    }
  }
}