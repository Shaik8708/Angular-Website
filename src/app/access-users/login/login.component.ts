import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    public formbuilder: FormBuilder
  ) {
    this.loginForm = this.formbuilder.group({
      'Email': ['', Validators.compose([Validators.required])],
      'Password': ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit(): void {
  }

}
