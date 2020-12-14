import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['test@gmail.com', [Validators.required, Validators.email]],
      password: ['test1234', [Validators.required, Validators.minLength(6)]],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value, null, 4));
    this.router.navigate(["/private/home"]);
  }

  onReset() {
    this.submitted = false;
    this.form.reset();
  }

}
