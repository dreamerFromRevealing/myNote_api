import {forwardRef, Inject, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {TodoBoard, TodoBoardDocument} from "./todo-board.model";
import {CreateTodoBoardInput, ListTodoBoardInput, UpdateTodoBoardInput} from "./todo-board.inputs";
import {Model, Schema as MongooseSchema} from "mongoose";
import {TodoBoxService} from "../todo-box/todo-box.service";

@Injectable()
export class TodoBoardService {
  constructor(
    @InjectModel(TodoBoard.name) private todoBoardModel: Model<TodoBoardDocument>,
    @Inject(forwardRef(() => TodoBoxService)) private todoBoxService: TodoBoxService
  ) {
  }

  async create(payload: CreateTodoBoardInput) {
    const todoBox = await this.todoBoxService.getById(payload.parentTodoBoxId)
    const createdTodoBoard = await new this.todoBoardModel({
      ...payload,
      parentProjectId: todoBox.parentProjectId
    })
    todoBox.childTodoBoardIds.push(createdTodoBoard._id)
    await todoBox.save()
    return createdTodoBoard.save()
  }

  getById(_id: MongooseSchema.Types.ObjectId) {
    return this.todoBoardModel.findById(_id).exec()
  }

  list(filters: ListTodoBoardInput) {
    return this.todoBoardModel.find({...filters}).exec()
  }

  update(payload: UpdateTodoBoardInput) {
    return this.todoBoardModel
      .findByIdAndUpdate(payload._id, payload, {new: true})
      .exec()
  }

  delete(_id: MongooseSchema.Types.ObjectId) {
    return this.todoBoardModel.findByIdAndDelete(_id).exec()
  }
}
