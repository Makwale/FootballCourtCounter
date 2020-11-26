import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WinnerPage } from './winner.page';

describe('WinnerPage', () => {
  let component: WinnerPage;
  let fixture: ComponentFixture<WinnerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinnerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WinnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
