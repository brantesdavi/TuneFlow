import { AlbumModule } from './album.module';

describe('AlbumModule', () => {
  const module: AlbumModule = new AlbumModule();

  it('should create', () => {
    expect(module).toBeTruthy();
  });
});
