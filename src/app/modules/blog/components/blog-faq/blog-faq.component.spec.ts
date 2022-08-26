import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogFaqComponent } from './blog-faq.component';

describe('BlogFaqComponent', () => {
  let component: BlogFaqComponent;
  let fixture: ComponentFixture<BlogFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogFaqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
