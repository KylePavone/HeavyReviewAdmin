import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from './components/input/input.module';
import { ButtonModule } from './components/button/button.module';
import { TextareaModule } from './components/textarea/textarea.module';
import { ModalModule } from './components/modal/modal.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputModule,
    ButtonModule,
    TextareaModule
  ],
  exports: [
    InputModule,
    ButtonModule,
    TextareaModule,
    ModalModule
  ]
})
export class SharedModule { }
