import { Test, TestingModule } from '@nestjs/testing';
import { TodoBoxService } from './todo-box.service';

describe('TodoBoxService', () => {
  let service: TodoBoxService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodoBoxService],
    }).compile();

    service = module.get<TodoBoxService>(TodoBoxService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
