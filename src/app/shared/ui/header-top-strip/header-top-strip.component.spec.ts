import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTopStripComponent } from './header-top-strip.component';

describe('HeaderTopStripComponent', () => {
  let component: HeaderTopStripComponent;
  let fixture: ComponentFixture<HeaderTopStripComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderTopStripComponent]
    });
    fixture = TestBed.createComponent(HeaderTopStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
