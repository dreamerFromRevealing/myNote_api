import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model, Schema as MongooseSchema} from "mongoose";
import {TodoBox, TodoBoxDocument} from "./todo-box.model";
import {CreateTodoBoxInput, ListTodoBoxInput, UpdateTodoBoxInput} from "./todo-box.inputs";

@Injectable()
export class TodoBoxService {
  constructor(@InjectModel(TodoBox.name) private todoBoxModel: Model<TodoBoxDocument>) {
  }

  create(payload: CreateTodoBoxInput) {
    const createdTodoBox = new this.todoBoxModel(payload)
    return createdTodoBox.save()
  }

  getById(_id: MongooseSchema.Types.ObjectId) {
    return this.todoBoxModel.findById(_id).exec()
  }

  list(filters: ListTodoBoxInput) {
    return this.todoBoxModel.find({...filters}).exec()
  }

  update(payload: UpdateTodoBoxInput) {
    return this.todoBoxModel
      .findByIdAndUpdate(payload._id, payload, {new: true})
      .exec()
  }

  delete(_id: MongooseSchema.Types.ObjectId) {
    return this.todoBoxModel.findByIdAndDelete(_id).exec()
  }
}
