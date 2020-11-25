import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FootballmatchPage } from './footballmatch.page';

describe('FootballmatchPage', () => {
  let component: FootballmatchPage;
  let fixture: ComponentFixture<FootballmatchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootballmatchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FootballmatchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
