import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { getPrecautions } from 'src/app/core/fixtures/precaution.fixture';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListPrecautionComponent } from './list-precaution.component';



describe('ListPrecautionComponent', () => {
  let component: ListPrecautionComponent;
  let fixture: ComponentFixture<ListPrecautionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListPrecautionComponent],
      imports: [SharedModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPrecautionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show precautions listed on the app with the expected discription', () => {

    component.precautions = getPrecautions();
    fixture.detectChanges();

    const cardContentDebugElement = fixture.debugElement.queryAll(By.css('.card-content'));

    expect(cardContentDebugElement.length).toBe(component.precautions.length);
    cardContentDebugElement.forEach((matTabLink, index) => {
      expect(matTabLink.nativeElement.textContent).toBe(component.precautions[index].number + '. ' +
        component.precautions[index].title
        + component.precautions[index].description);
    });

  });

  it('should show card title with precautions as heading', () => {
    component.precautions = getPrecautions();
    fixture.detectChanges();
    const cardTitleDebugElement = fixture.debugElement.query(By.css('.card-title'));
    expect(cardTitleDebugElement.nativeElement.textContent).toBe(' Precautions ');
  });


});
