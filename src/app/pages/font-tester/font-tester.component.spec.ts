import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontTesterComponent } from './font-tester.component';

describe('FontTesterComponent', () => {
  let component: FontTesterComponent;
  let fixture: ComponentFixture<FontTesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontTesterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FontTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
