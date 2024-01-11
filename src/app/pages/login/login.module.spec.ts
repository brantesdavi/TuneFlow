import { LoginModule } from './login.module';

describe('LoginModule', () => {
  const module: LoginModule = new LoginModule();

  it('should create', () => {
    expect(module).toBeTruthy();
  });
});
