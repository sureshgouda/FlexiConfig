import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormElementComponent } from './form-element/form-element.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [FormElementComponent],
    imports: [CommonModule,ReactiveFormsModule],
    providers: [],
    exports:[FormElementComponent]
})
export class SharedModule { }