import { Test, TestingModule } from '@nestjs/testing';
import { LogbookFolderService } from './logbook-folder.service';

describe('LogbookFolderService', () => {
  let service: LogbookFolderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LogbookFolderService],
    }).compile();

    service = module.get<LogbookFolderService>(LogbookFolderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
