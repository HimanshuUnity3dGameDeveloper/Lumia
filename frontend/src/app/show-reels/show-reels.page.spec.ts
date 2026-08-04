import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowReelsPage } from './show-reels.page';

describe('ShowReelsPage', () => {
  let component: ShowReelsPage;
  let fixture: ComponentFixture<ShowReelsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowReelsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
