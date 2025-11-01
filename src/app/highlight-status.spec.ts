import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ElementRef, Renderer2 } from '@angular/core';
import { HighlightStatus } from './highlight-status'; // Adjust path if needed

// Test host component to apply the directive
@Component({
  template: `<div appHighlightStatus="testStatus">Test Element</div>`
})
class TestHostComponent {
  @Input() testStatus: string = ''; // Now @Input() is recognized
}

// Mocks (you can expand these if needed)
const mockElementRef = { nativeElement: document.createElement('div') };
const mockRenderer = {
  setStyle: jasmine.createSpy('setStyle')
};

describe('HighlightStatus', () => {
  let directive: HighlightStatus;
  let fixture: ComponentFixture<TestHostComponent>;
  let el: HTMLElement;
  let renderer: Renderer2;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestHostComponent], // Host for the directive
      providers: [
        { provide: ElementRef, useValue: mockElementRef },
        { provide: Renderer2, useValue: mockRenderer }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    el = fixture.nativeElement.querySelector('div');
    directive = fixture.debugElement.query(By.directive(HighlightStatus)).componentInstance;
    renderer = TestBed.inject(Renderer2); // Or access via directive if needed
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should set transparent background for default/unknown status', () => {
    fixture.componentInstance.testStatus = 'Unknown';
    fixture.detectChanges(); // Triggers ngOnChanges

    expect(mockRenderer.setStyle).toHaveBeenCalledWith(
      mockElementRef.nativeElement,
      'background-color',
      'transparent'
    );
  });

  it('should set lightgreen background for "Terminé"', () => {
    fixture.componentInstance.testStatus = 'Terminé';
    fixture.detectChanges();

    expect(mockRenderer.setStyle).toHaveBeenCalledWith(
      mockElementRef.nativeElement,
      'background-color',
      'lightgreen'
    );
  });

  it('should set yellow background for "En cours"', () => {
    fixture.componentInstance.testStatus = 'En cours';
    fixture.detectChanges();

    expect(mockRenderer.setStyle).toHaveBeenCalledWith(
      mockElementRef.nativeElement,
      'background-color',
      'yellow'
    );
  });

  it('should set lightgray background for "En attente"', () => {
    fixture.componentInstance.testStatus = 'En attente';
    fixture.detectChanges();

    expect(mockRenderer.setStyle).toHaveBeenCalledWith(
      mockElementRef.nativeElement,
      'background-color',
      'lightgray'
    );
  });
});