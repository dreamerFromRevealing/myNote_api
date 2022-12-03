import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model, Schema as MongooseSchema} from "mongoose";
import {TodoTask, TodoTaskDocument} from "./todo-task.model";
import {CreateTodoTaskInput, ListTodoTaskInput, UpdateTodoTaskInput} from "./todo-task.inputs";

@Injectable()
export class TodoTaskService {
  constructor(@InjectModel(TodoTask.name) private todoTaskModel: Model<TodoTaskDocument>) {}

  create(payload: CreateTodoTaskInput) {
    const createdTodoTask = new this.todoTaskModel(payload)
    return createdTodoTask.save()
  }

  getById(_id: MongooseSchema.Types.ObjectId) {
    return this.todoTaskModel.findById(_id).exec()
  }

  async list(filters: ListTodoTaskInput) {
    const data = await this.todoTaskModel.find({...filters}).exec()
    return data.sort((a, b) => a.position - b.position)
  }

  update(payload: UpdateTodoTaskInput) {
    return this.todoTaskModel
      .findByIdAndUpdate(payload._id, payload, {new: true})
      .exec()
  }

  delete(_id: MongooseSchema.Types.ObjectId) {
    return this.todoTaskModel.findByIdAndDelete(_id).exec()
  }
}
