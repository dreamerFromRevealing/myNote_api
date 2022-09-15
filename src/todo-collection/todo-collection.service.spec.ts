import { Test, TestingModule } from '@nestjs/testing';
import { TodoCollectionService } from './todo-collection.service';

describe('TodoCollectionService', () => {
  let service: TodoCollectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodoCollectionService],
    }).compile();

    service = module.get<TodoCollectionService>(TodoCollectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
