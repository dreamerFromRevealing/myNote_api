import {Module} from '@nestjs/common';
import {TodoCollectionService} from './todo-collection.service';
import {TodoCollectionResolver} from './todo-collection.resolver';
import {MongooseModule} from "@nestjs/mongoose";
import {TodoCollection, TodoCollectionSchema} from "./todo-collection.model";
import { TodoCollectionController } from './todo-collection.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{name: TodoCollection.name, schema: TodoCollectionSchema}])
  ],
  providers: [TodoCollectionService, TodoCollectionResolver],
  controllers: [TodoCollectionController]
})
export class TodoCollectionModule {}
