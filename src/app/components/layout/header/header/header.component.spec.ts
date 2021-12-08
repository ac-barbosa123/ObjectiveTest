import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create header component', () => {
    expect(component).toBeTruthy();
  });

  it('should show objective logo', () => {
    expect(fixture.nativeElement.querySelector('[class="logo"]')).toBeTruthy();
  });

  it('should show candidate name', () => {
    expect(fixture.nativeElement.querySelector('[class="candidate-name"]')).toBeTruthy();
  });

});
