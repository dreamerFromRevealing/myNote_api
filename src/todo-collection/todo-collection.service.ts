import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model, Schema as MongooseSchema} from "mongoose";
import {TodoCollection, TodoCollectionDocument} from "./todo-collection.model";
import {
  CreateTodoCollectionInput,
  ListTodoCollectionInput, UpdatePositionArrTodoCollectionsInput,
  UpdatePositionTodoCollectionInput,
  UpdateTodoCollectionInput
} from "./todo-collection.inputs";
import {UpdateTODOCollectionPositionDto} from "./dto/update-position.dto";

@Injectable()
export class TodoCollectionService {
  constructor(@InjectModel(TodoCollection.name) private todoCollectionModel: Model<TodoCollectionDocument>) {
  }

  create(payload: CreateTodoCollectionInput) {
    const createdTodoCollection = new this.todoCollectionModel(payload)
    return createdTodoCollection.save()
  }

  getById(_id: MongooseSchema.Types.ObjectId) {
    return this.todoCollectionModel.findById(_id).exec()
  }

  async list(filters: ListTodoCollectionInput) {
    const data = await this.todoCollectionModel.find({...filters}).exec()
    return data.sort((a, b) => a.position - b.position)
  }

  update(payload: UpdateTodoCollectionInput) {
    return this.todoCollectionModel
      .findByIdAndUpdate(payload._id, payload, {new: true})
      .exec()
  }

  delete(_id: MongooseSchema.Types.ObjectId) {
    return this.todoCollectionModel.findByIdAndDelete(_id).exec()
  }

  updatePosition(payload: UpdatePositionArrTodoCollectionsInput) {
   return payload.todoCollections.map(async (collection: UpdatePositionTodoCollectionInput) => {
      return this.todoCollectionModel
        .findByIdAndUpdate(collection._id, collection, {new: true})
        .exec()
    })
  }
}
