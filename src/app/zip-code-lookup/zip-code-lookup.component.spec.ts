import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipCodeLookupComponent } from './zip-code-lookup.component';

describe('ZipCodeLookupComponent', () => {
  let component: ZipCodeLookupComponent;
  let fixture: ComponentFixture<ZipCodeLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZipCodeLookupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZipCodeLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
