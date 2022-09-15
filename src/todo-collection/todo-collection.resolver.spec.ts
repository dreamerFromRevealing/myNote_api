import { Test, TestingModule } from '@nestjs/testing';
import { TodoCollectionResolver } from './todo-collection.resolver';

describe('TodoCollectionResolver', () => {
  let resolver: TodoCollectionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodoCollectionResolver],
    }).compile();

    resolver = module.get<TodoCollectionResolver>(TodoCollectionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
