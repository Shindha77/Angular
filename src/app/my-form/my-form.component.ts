import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})

export class MyFormComponent implements OnInit {

  user: User = new User()

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(myForm: NgForm) {
    console.log(myForm.form);
    console.log('valeurs : ', JSON.stringify(myForm.value));
  }

}
