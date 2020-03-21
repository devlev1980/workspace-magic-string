import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'yl-magic-string',
  template: `
    <input type="text" (keydown.enter)="markText($event.target.value)">
    <div #content [hidden]="true">
      <ng-content></ng-content>
    </div>

    <div [innerHTML]="controlledContent"></div>
  `,
  styles: [
      `.marked {
      background-color: chocolate
    }`
  ],
  encapsulation: ViewEncapsulation.None
})
export class MagicStringComponent implements OnInit {

  // @ViewChild('content', {read: ViewContainerRef}) content: ElementRef;
  @ViewChild('content') content: ElementRef;

  originalContent: string;
  controlledContent: string;

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.cdr.detectChanges();
    this.controlledContent = this.originalContent = this.content.nativeElement.textContent;


  }

  markText(value: any) {
    console.log(value);
    this.controlledContent = this.originalContent;
    this.controlledContent = this.originalContent.replace(
      new RegExp(value, 'g'),
      `<span class="marked">${value}</span>`);
  }
}
