import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInstancesComponent } from './my-instances.component';

describe('MyInstancesComponent', () => {
  let component: MyInstancesComponent;
  let fixture: ComponentFixture<MyInstancesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyInstancesComponent]
    });
    fixture = TestBed.createComponent(MyInstancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
