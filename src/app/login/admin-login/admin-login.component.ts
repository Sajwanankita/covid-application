import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Constants } from 'src/app/core/constants/app-constants';
import { FieldValidationConstants } from 'src/app/core/constants/field-validation-constants';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  loginForm: FormGroup;
  isChecked: boolean;

  constructor(private formBuilder: FormBuilder, private router: Router,
    private readonly loginService: LoginService,
    private readonly route: ActivatedRoute, private readonly toastrService: ToastrService) {
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
        return `${field[0].toUpperCase() + field.substr(1).toLowerCase()} should be of min length
         ${this.loginForm.controls[field].errors.minlength.requiredLength}`;
      }
      else if (this.loginForm.controls[field].errors.maxlength) {
        return `${field[0].toUpperCase() + field.substr(1).toLowerCase()} should be of max length
        ${this.loginForm.controls[field].errors.maxlength.requiredLength}`;
      }
    }
  }

  ngOnInit(): void {
    this.isChecked = false;
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required,
      Validators.minLength(FieldValidationConstants.USERNAME_MIN_LENGTH),
      Validators.maxLength(FieldValidationConstants.USERNAME_MAX_LENGTH)]],
      password: ['', [Validators.required,
      Validators.minLength(FieldValidationConstants.PASSWORD_MIN_LENGTH),
      Validators.maxLength(FieldValidationConstants.PASSWORD_MAX_LENGTH)]]
    });
  }

  login(): void {
    if (this.loginService.validateUser(this.loginForm.value)) {
      localStorage.setItem(Constants.AUTHENTICATION_TOKEN_KEY, Constants.AUTHENTICATION_TOKEN_VALUE);
      localStorage.setItem('username', this.loginForm.value.username);
      this.toastrService.success('Logged in successfully!', Constants.COVID_INDIA_PORTAL);
      const redirectTo = this.route.snapshot.queryParamMap.get('redirectTo');
      if (redirectTo !== null) {
        this.router.navigate([redirectTo]);
      } else {
        this.router.navigate(['/news/add-news']);
      }
    } else {
      this.toastrService.error('Please enter valid credentials!', Constants.COVID_INDIA_PORTAL);
    }

  }

  isToggleChecked(): boolean {
    return this.isChecked;
  }

  resetForm(): void {
    this.loginForm.reset();
    this.loginForm.clearValidators();
  }

  toggleCheck(): void {
    this.isChecked = !this.isChecked;
  }

}
