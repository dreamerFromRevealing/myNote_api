import { Test, TestingModule } from '@nestjs/testing';
import { LogbookFolderResolver } from './logbook-folder.resolver';

describe('LogbookFolderResolver', () => {
  let resolver: LogbookFolderResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LogbookFolderResolver],
    }).compile();

    resolver = module.get<LogbookFolderResolver>(LogbookFolderResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
