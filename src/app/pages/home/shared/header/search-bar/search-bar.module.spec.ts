import { SearchBarModule } from './search-bar.module';

describe('SearchBarModule', () => {
  const module: SearchBarModule = new SearchBarModule();

  it('should create', () => {
    expect(module).toBeTruthy();
  });
});
