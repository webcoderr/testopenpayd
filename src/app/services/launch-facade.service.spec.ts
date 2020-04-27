import { TestBed } from '@angular/core/testing';
import { GraphQLModule } from '../graphql.module';
import { LaunchFacadeService } from './launch-facade.service';

describe('LaunchFacadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [GraphQLModule]
  }));

  it('should be created', () => {
    const service: LaunchFacadeService = TestBed.get(LaunchFacadeService);
    expect(service).toBeTruthy();
  });
});
