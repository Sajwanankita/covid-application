import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Constants } from 'src/app/core/constants/app-constants';
import { FieldValidationConstants } from 'src/app/core/constants/field-validation-constants';
import { NewsService } from 'src/app/core/services/news.service';
import { News } from '../../../core/models/news';

@Component({
  selector: 'covid-app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent implements OnInit {

  addNewsForm: FormGroup;
  news: News;

  constructor(private formBuilder: FormBuilder, private readonly route: ActivatedRoute,
    private readonly router: Router, private readonly newsService: NewsService,
    private readonly toastrService: ToastrService) {

  }

  ngOnInit(): void {
    this.addNewsForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(FieldValidationConstants.TITLE_FIELD_MIN_LENGTH),
      Validators.maxLength(FieldValidationConstants.TITLE_FIELD_MAX_LENGTH)]],
      description: ['', [Validators.required, Validators.minLength(FieldValidationConstants.DESCRIPTION_FIELD_MIN_LENGTH),
      Validators.maxLength(FieldValidationConstants.DESCRIPTION_FIELD_MAX_LENGTH)]],
      summary: ['', [Validators.required, Validators.minLength(FieldValidationConstants.SUMMARY_FIELD_MIN_LENGTH),
      Validators.maxLength(FieldValidationConstants.SUMMARY_FIELD_MAX_LENGTH)]],
      fullNews: ['', [Validators.required, Validators.minLength(FieldValidationConstants.FULL_NEWS_FIELD_MIN_LENGTH),
      Validators.maxLength(FieldValidationConstants.FULL_NEWS_FIELD_MAX_LENGTH)]]
    });
  }

  addNews(): void {
    this.newsService.addNews(this.addNewsForm.value).subscribe();
    this.toastrService.info('News has been successfully added', Constants.COVID_INDIA_PORTAL);
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

  cancelForm(): void {
    this.router.navigate([Constants.NEWS_ROUTE]);
  }

  resetForm(): void {
    this.addNewsForm.reset();
  }

}

