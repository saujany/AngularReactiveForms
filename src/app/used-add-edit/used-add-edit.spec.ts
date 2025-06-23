import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedAddEdit } from './used-add-edit';

describe('UsedAddEdit', () => {
  let component: UsedAddEdit;
  let fixture: ComponentFixture<UsedAddEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsedAddEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsedAddEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
