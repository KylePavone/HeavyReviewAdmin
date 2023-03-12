import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  template: `
    <textarea 
      [attr.name]="name"
      [attr.id]="id" 
      [attr.cols]="cols" 
      [attr.rows]="rows"
      [attr.placeholder]="placeholder"
      [attr.maxlength]="maxlength"
      [(ngModel)]="model"
      (ngModelChange)="onChangeModel($event)"
      [disabled]="disabled"
      [readonly]="readonly"
      >
    </textarea>
  `,
  styleUrls: ['./textarea.component.scss'],
  providers: [
    {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => TextareaComponent),
        multi: true
    }
  ]
})
export class TextareaComponent implements ControlValueAccessor {
  public model: any;

  @Input() name!: string;
  @Input() id!: string;
  @Input() readonly: boolean = false;
  @Input() disabled: boolean = false;
  @Input() placeholder!: string;
  @Input() rows: number = 5;
  @Input() cols: number = 50;
  @Input() maxlength!: number;


  constructor() { }

  writeValue(value: any): void {
    this.model = value;
  }

  onChangeCallback = (_: any) => { }
  onTouchedCallback = () => { }

  onChangeModel(value: any): void {
      this.model = value;
      this.onChangeCallback(value);
  }

  registerOnChange(onChange: any): void {
      this.onChangeCallback = onChange;
  }

  registerOnTouched(onTouched: any): void {
      this.onTouchedCallback = onTouched;
  }

  setDisabledState(isDisabled: boolean): void {
      this.disabled = isDisabled;
  }

}
