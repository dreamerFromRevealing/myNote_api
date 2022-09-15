import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model, Schema as MongooseSchema} from "mongoose";
import {TodoCollection, TodoCollectionDocument} from "./todo-collection.model";
import {CreateTodoCollectionInput, ListTodoCollectionInput, UpdateTodoCollectionInput} from "./todo-collection.inputs";

@Injectable()
export class TodoCollectionService {
  constructor(@InjectModel(TodoCollection.name) private todoCollectionModel: Model<TodoCollectionDocument>) {}

  create(payload: CreateTodoCollectionInput) {
    const createdTodoCollection = new this.todoCollectionModel(payload)
    return createdTodoCollection.save()
  }

  getById(_id: MongooseSchema.Types.ObjectId) {
    return this.todoCollectionModel.findById(_id).exec()
  }

  list(filters: ListTodoCollectionInput) {
    return this.todoCollectionModel.find({...filters}).exec()
  }

  update(payload: UpdateTodoCollectionInput) {
    return this.todoCollectionModel
      .findByIdAndUpdate(payload._id, payload, {new: true})
      .exec()
  }

  delete(_id: MongooseSchema.Types.ObjectId) {
    return this.todoCollectionModel.findByIdAndDelete(_id).exec()
  }
}
