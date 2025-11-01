import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightStatus]',
  standalone: true
})
export class HighlightStatus implements OnChanges {
  @Input() appHighlightStatus: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    let bgColor = 'transparent';
    switch (this.appHighlightStatus) {
      case 'Terminé':
        bgColor = 'lightgreen';
        break;
      case 'En cours':
        bgColor = 'yellow';
        break;
      case 'En attente':
        bgColor = 'lightgray';
        break;
      default:
        bgColor = 'transparent';
    }
    this.renderer.setStyle(this.el.nativeElement, 'background-color', bgColor);
  }
}