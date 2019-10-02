import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  personFormValue: any;

  constructor() { }

  ngOnInit() {
  }

  flexiConfig = {
    items: [
      {
        "name": "person_name",
        "label": "Person's Name",
        "type:": "TextField"
      },
      {
        "name": "states",
        "label": "Person's state",
        "type": "DropDown",
        "values": [
          "Maharashtra",
          "Kerala",
          "Tamil Nadu"
        ]
      }
    ]
  };

  onFormSubmit(event) {
    this.personFormValue = event;
  }

}
