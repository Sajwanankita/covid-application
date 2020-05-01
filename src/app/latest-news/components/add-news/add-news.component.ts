import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FieldValidationLength } from 'src/app/core/constants/field-validation-length';
import { News } from '../../../core/models/news';
import { NewsService } from 'src/app/core/services/news.service';
import { ToastrService } from 'ngx-toastr';
import { Constants } from 'src/app/core/constants/app-constants';

@Component({
  selector: 'covid-app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent implements OnInit {

  addNewsForm: FormGroup;

  news: News;

  constructor(private formBuilder: FormBuilder, private readonly route: ActivatedRoute,
    private readonly router: Router, private newsService: NewsService,
    private readonly toastrService: ToastrService) {

  }

  ngOnInit(): void {
    if (localStorage.getItem(Constants
      .AUTHENTICATION_TOKEN_KEY) === null) {
      this.router.navigate([Constants.LOGIN_ROUTE]);
      this.toastrService.info('Please login to add news!', Constants.COVID_INDIA_PORTAL);

    }
    this.addNewsForm = this.formBuilder.group({
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
  addNews(): void {
    this.newsService.addNews(this.addNewsForm.value).subscribe();
    this.router.navigate([Constants.NEWS_ROUTE]);
  }

  getErrorMessage(field: string): string {
    if (this.addNewsForm.controls[field].errors) {
      if (this.addNewsForm.controls[field].errors.required) {
        return `${field[0].toUpperCase() + field.substr(1).toLowerCase()} is a required field`;
      }
      else if (this.addNewsForm.controls[field].errors.minlength) {
        return `${field[0].toUpperCase() + field.substr(1).toLowerCase()} should be of min length
         ${this.addNewsForm.controls[field].errors.minlength.requiredLength}`;
      }
      else if (this.addNewsForm.controls[field].errors.maxlength) {
        return `${field[0].toUpperCase() + field.substr(1).toLowerCase()} should be of max length
        ${this.addNewsForm.controls[field].errors.maxlength.requiredLength}`;
      }
    }
  }

  cancelForm() {
    this.router.navigate([Constants.NEWS_ROUTE]);
  }

  resetForm() {
    this.addNewsForm.reset();
  }

}

