import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitGithubComponent } from './git-github.component';

describe('GitGithubComponent', () => {
  let component: GitGithubComponent;
  let fixture: ComponentFixture<GitGithubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GitGithubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
