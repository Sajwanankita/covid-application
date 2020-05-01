import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FieldValidationLength } from 'src/app/core/constants/field-validation-length';
import { News } from './../../core/models/news';
import { NewsService } from 'src/app/core/services/news.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'covid-app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent implements OnInit {

  loginForm: FormGroup;

  news: News;

  constructor(private formBuilder: FormBuilder, private readonly route: ActivatedRoute,
    private readonly router: Router, private newsService: NewsService,
     private readonly toastrService: ToastrService) {

  }


  ngOnInit() {

    if (localStorage.getItem('TOKEN') === null) {
      this.router.navigate(['/login']);
      this.toastrService.info('Please login to add news!', 'Covid India Portal');

    }
    this.loginForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(FieldValidationLength.TITLE_FIELD_MIN_LENGTH),
      Validators.maxLength(FieldValidationLength.TITLE_FIELD_MAX_LENGTH)]],
      description: ['', [Validators.required, Validators.minLength(FieldValidationLength.DESCRIPTION_FIELD_MIN_LENGTH),
      Validators.maxLength(FieldValidationLength.DESCRIPTION_FIELD_MAX_LENGTH)]],
      summary: ['', [Validators.required, Validators.minLength(FieldValidationLength.SUMMARY_FIELD_MIN_LENGTH),
      Validators.maxLength(FieldValidationLength.SUMMARY_FIELD_MAX_LENGTH)]],
      fullNews: ['', [Validators.required, Validators.minLength(FieldValidationLength.FULL_NEWS_FIELD_MIN_LENGTH),
      Validators.maxLength(FieldValidationLength.FULL_NEWS_FIELD_MAX_LENGTH)]]
    });
  }
  //TODO
  addNews() {
    this.newsService.addNews({
      title: this.loginForm.get('title').value,
      fullNews: this.loginForm.get('fullNews').value,
      description: this.loginForm.get('description').value,
      summary: this.loginForm.get('summary').value
    }).subscribe(data => {
      console.log(data);

    });
    this.router.navigate(['news']);
  }

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

  cancelForm() {
    this.router.navigate(['news']);
  }

  resetForm() {
    this.loginForm.reset();
  }

}

