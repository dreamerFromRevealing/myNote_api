import { Test, TestingModule } from '@nestjs/testing';
import { TodoCollectionController } from './todo-collection.controller';

describe('TodoCollectionController', () => {
  let controller: TodoCollectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoCollectionController],
    }).compile();

    controller = module.get<TodoCollectionController>(TodoCollectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
