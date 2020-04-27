import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LaunchListComponent } from './launch-list.component';
import { GraphQLModule } from '../graphql.module';

describe('LaunchListComponent', () => {
  let component: LaunchListComponent;
  let fixture: ComponentFixture<LaunchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GraphQLModule],
      declarations: [ LaunchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
