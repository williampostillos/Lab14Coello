import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSeguroComponent } from './view-course.component';

describe('ViewSeguroComponent', () => {
    let component: ViewSeguroComponent;
    let fixture: ComponentFixture<ViewSeguroComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
          declarations: [ ViewSeguroComponent ]
        })
        .compileComponents();
    
        fixture = TestBed.createComponent(ViewSeguroComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
    
      it('should create', () => {
        expect(component).toBeTruthy();
    });
});