import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {TodoCollection, TodoCollectionDocument} from "./todo-collection.model";

@Injectable()
export class TodoCollectionService {
  constructor(@InjectModel(TodoCollection.name) private todoCollectionModel: Model<TodoCollectionDocument>) {}

}
