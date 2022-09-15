import {Module} from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {TodoBox, TodoBoxSchema} from "./todo-box.model";
import { TodoBoxService } from './todo-box.service';
import { TodoBoxResolver } from './todo-box.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{name: TodoBox.name, schema: TodoBoxSchema}])
  ],
  providers: [TodoBoxService, TodoBoxResolver],
})
export class TodoBoxModule {}
