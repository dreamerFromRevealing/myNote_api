import {Module} from '@nestjs/common';
import {TodoCollectionService} from './todo-collection.service';
import {TodoCollectionResolver} from './todo-collection.resolver';
import {MongooseModule} from "@nestjs/mongoose";
import {TodoCollection, TodoCollectionSchema} from "./todo-collection.model";

@Module({
  imports: [
    MongooseModule.forFeature([{name: TodoCollection.name, schema: TodoCollectionSchema}])
  ],
  providers: [TodoCollectionService, TodoCollectionResolver]
})
export class TodoCollectionModule {}
