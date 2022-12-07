import { Test, TestingModule } from '@nestjs/testing';
import { TodoBoxResolver } from './todo-box.resolver';

describe('TodoBoxResolver', () => {
  let resolver: TodoBoxResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodoBoxResolver],
    }).compile();

    resolver = module.get<TodoBoxResolver>(TodoBoxResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
