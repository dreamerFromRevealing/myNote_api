import { Test, TestingModule } from '@nestjs/testing';
import { TodoTaskResolver } from './todo-task.resolver';

describe('TodoTaskResolver', () => {
  let resolver: TodoTaskResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodoTaskResolver],
    }).compile();

    resolver = module.get<TodoTaskResolver>(TodoTaskResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
