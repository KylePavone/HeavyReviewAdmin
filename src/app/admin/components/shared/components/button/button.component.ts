import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button
    [attr.id]="id"
    [attr.type]="type"
    [attr.text]="text"
    [style.min-width]="minWidth"
    [class.active]="active"
    [disabled]="disabled"
    >
    {{ text }}
    </button>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  
  @Input() id!: string;
  @Input() type: string = 'submit';
  @Input() text!: string;
  @Input() active: boolean = false;
  @Input() disabled: boolean = false
  @Input() minWidth: string = '140px';
}
