import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.scss']
})
export class FormElementComponent implements OnInit {
  registerForm: FormGroup;
  @Input() flexiConfig: any;
  @Output() formvalues = new EventEmitter<object>();
  constructor(private formBuilder: FormBuilder, ) {

  }


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      state: ['', Validators.required],
    });
  }

  onSubmit() {
    alert(`Form submited with name ${this.registerForm.value.name} and state ${this.registerForm.value.state}`)
    this.formvalues.emit(this.registerForm.value);

  }


}
