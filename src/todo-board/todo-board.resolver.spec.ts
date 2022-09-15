import { Test, TestingModule } from '@nestjs/testing';
import { TodoBoardResolver } from './todo-board.resolver';

describe('TodoBoardResolver', () => {
  let resolver: TodoBoardResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodoBoardResolver],
    }).compile();

    resolver = module.get<TodoBoardResolver>(TodoBoardResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
