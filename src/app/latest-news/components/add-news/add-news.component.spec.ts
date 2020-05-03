import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListNewsComponent } from '../list-news/list-news.component';
import { AddNewsComponent } from './add-news.component';


describe('AddNewsComponent', () => {
  let component: AddNewsComponent;
  let fixture: ComponentFixture<AddNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewsComponent],
      imports: [
        SharedModule,
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule.withRoutes([
          {
            path: 'news',
            component: ListNewsComponent
          }
        ]),
        HttpClientTestingModule,
        BrowserAnimationsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call add news when all the data is validated', () => {

    spyOn(component, 'addNews').and.callThrough();

    component.addNewsForm.controls.title.setValue('Title News');
    component.addNewsForm.controls.description.setValue('Description');
    component.addNewsForm.controls.summary.setValue('Summary here');
    component.addNewsForm.controls.fullNews.setValue('Full news here');
    const submitButton = fixture.debugElement.query(By.css('form'));

    fixture.detectChanges();

    expect(component.addNewsForm.valid).toBeTruthy();
    submitButton.triggerEventHandler('ngSubmit', {});
    expect(component.addNews).toHaveBeenCalled();

  });

  it('should show button disabled when all the form data is invalid ', () => {

    fixture.detectChanges();

    component.addNewsForm.controls.title.setValue('Title News');
    component.addNewsForm.controls.description.setValue('');
    component.addNewsForm.controls.summary.setValue('Summary here');
    component.addNewsForm.controls.fullNews.setValue('Full news here');

    fixture.detectChanges();

    expect(component.addNewsForm.valid).toBeFalsy();
    expect(fixture.debugElement.nativeElement.querySelector('.submit-button').disabled).toBeTruthy();
  });

  it('should show button disabled when all the form data is invalid ', () => {

    fixture.detectChanges();

    const title = component.addNewsForm.controls.title;
    const description = component.addNewsForm.controls.description;
    const summary = component.addNewsForm.controls.summary;
    const fullNews = component.addNewsForm.controls.fullNews;

    title.setValue('');
    description.setValue('');
    summary.setValue('');
    fullNews.setValue('');
    fixture.detectChanges();

    expect(component.addNewsForm.valid).toBeFalsy();
    expect(title.hasError('required')).toBeTruthy();
    expect(description.hasError('required')).toBeTruthy();
    expect(summary.hasError('required')).toBeTruthy();
    expect(fullNews.hasError('required')).toBeTruthy();

    expect(fixture.debugElement.nativeElement.querySelector('.submit-button').disabled).toBeTruthy();

  });
});
