import { TestBed, inject } from '@angular/core/testing';

import { AuthInterceptor } from './auth.interceptor';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        AuthInterceptor,
      ]
    });
  });

  it('should be created', inject([AuthInterceptor], (service: AuthInterceptor) => {
    expect(service).toBeTruthy();
  }));
});
