import { TestBed } from '@angular/core/testing';

import { UsersClientService } from './users-client.service';

describe('UsersClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersClientService = TestBed.get(UsersClientService);
    expect(service).toBeTruthy();
  });
});
