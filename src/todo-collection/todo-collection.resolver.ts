import {Resolver} from '@nestjs/graphql';
import {TodoCollection} from "./todo-collection.model";
import {TodoCollectionService} from "./todo-collection.service";

@Resolver(() => TodoCollection)
export class TodoCollectionResolver {
  constructor(private todoCollectionService: TodoCollectionService) {}
}
