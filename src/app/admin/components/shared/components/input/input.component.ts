import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'app-input',
  template: `
    <input 
      [name]="name"
      [attr.id]="id"
      [attr.name]="name"
      [type]="type"
      [attr.placeholder]="placeholder"
      [attr.error]="error"
      [disabled]="disabled"
      [(ngModel)]="value"
      [style.width]="width"
      (ngModelChange)="onChangeModel($event)"
    />
  `,
  styleUrls: ['./input.component.scss'],
  providers: [
    {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => InputComponent),
        multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent implements ControlValueAccessor {

  public value: any;

  @Input() name!: string;
  @Input() type: string = 'text';
  @Input() id!: string;
  @Input() disabled: boolean = false;
  @Input() placeholder!: string;
  @Input() width: string = '100%';
  @Input() error: any = false;

  onChangeCallback = (_: any) => { }
  onTouchedCallback = () => { }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(onChange: any): void {
    this.onChangeCallback = onChange;
  }

  registerOnTouched(onTouched: any): void {
    this.onTouchedCallback = onTouched;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onChangeModel(value: any): void {
    this.value = value;
    this.error = false;
    this.onChangeCallback(value);
  }
}
