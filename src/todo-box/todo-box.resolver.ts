import {Resolver} from '@nestjs/graphql';
import {TodoBox} from "./todo-box.model";
import {TodoBoxService} from "./todo-box.service";

@Resolver(() => TodoBox)
export class TodoBoxResolver {
  constructor(private todoBoxService: TodoBoxService) {}

}
