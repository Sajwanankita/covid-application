import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/core/services/login.service';
import { FieldValidationLength } from 'src/app/core/constants/field-validation-length';

@Component({
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  // variable of login form.
  loginForm: FormGroup;
  isChecked: boolean;

  /**
   *
   * @param formBuilder : FormBuilder
   * @param route : Router
   * @param loginService : LoginService
   */
  constructor(private formBuilder: FormBuilder, private router: Router,
    private readonly loginService: LoginService,
    private route: ActivatedRoute, private readonly toastrService: ToastrService) {

    this.isChecked = false;

    /**
     * Login form initialized with default values.
     */
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required,
      Validators.minLength(FieldValidationLength.USERNAME_MIN_LENGTH),
      Validators.maxLength(FieldValidationLength.USERNAME_MAX_LENGTH)]],
      password: ['', [Validators.required,
      Validators.minLength(FieldValidationLength.PASSWORD_MIN_LENGTH),
      Validators.maxLength(FieldValidationLength.PASSWORD_MAX_LENGTH)]]
    });
  }

  /**
   * This method returns the error messages.
   */
  getErrorMessage(field: string): string {
    if (this.loginForm.controls[field].errors) {
      if (this.loginForm.controls[field].errors.required) {
        return `${field[0].toUpperCase() + field.substr(1).toLowerCase()} is a required field`;
      }
      else if (this.loginForm.controls[field].errors.minlength) {
        console.log('here');
        return `${field[0].toUpperCase() + field.substr(1).toLowerCase()} should be of min length
         ${this.loginForm.controls[field].errors.minlength.requiredLength}`;
      }
      else if (this.loginForm.controls[field].errors.maxlength) {
        return `${field[0].toUpperCase() + field.substr(1).toLowerCase()} should be of max length
        ${this.loginForm.controls[field].errors.maxlength.requiredLength}`;
      }
    }
  }
  /** Clears the local storage initially */
  ngOnInit() {
    // this.isChecked = false;
    // console.log(this.isChecked);
    // console.log('here......' + this.route.snapshot.queryParamMap.get('redirectTo'));
  }

  /**
   * Login the user and redirect to dashboard when valid.
   * @param myform : IUser
   */
  login() {
    console.log('hello');
    if (this.loginService.validateUser(this.loginForm.value)) {
      localStorage.setItem('TOKEN', 'token');
      localStorage.setItem('username', this.loginForm.value.username);
      this.toastrService.success('Logged in successfully!', 'Covid India Portal');
      const redirectTo = this.route.snapshot.queryParamMap.get('redirectTo');
      if (redirectTo !== null) {
        this.router.navigate([redirectTo]);
      } else {
        this.router.navigate(['/news/add-news']);
      }

    } else {
      this.toastrService.error('Please enter valid credentials!', 'Covid India Portal');
    }

  }

  isToggleChecked() {
    return this.isChecked;
  }

  /**
   * resets the login form.
   */
  resetForm() {
    this.loginForm.reset();
    this.loginForm.clearValidators();
  }

  toggleCheck() {
    this.isChecked = !this.isChecked;
    console.log(this.isChecked);
  }

}
