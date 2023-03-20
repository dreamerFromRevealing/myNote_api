import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model, Schema as MongooseSchema} from "mongoose";
import {Log, LogDocument} from "./log.model";
import {CreateLogInput, ListLogInput, UpdateLogInput} from "./log.inputs";

@Injectable()
export class LogService {
  constructor(@InjectModel(Log.name) private logModel: Model<LogDocument>) {}

  create(payload: CreateLogInput) {
    const createdLogbook = new this.logModel({...payload, content: ''})
    return createdLogbook.save()
  }

  getById(_id: MongooseSchema.Types.ObjectId) {
    return this.logModel.findById(_id).exec()
  }

  list(filters: ListLogInput) {
    return this.logModel.find({...filters}).exec()
  }

  update(payload: UpdateLogInput) {
    return this.logModel
      .findByIdAndUpdate(payload._id, payload, {new: true})
      .exec()
  }

  delete(_id: MongooseSchema.Types.ObjectId) {
    return this.logModel.findByIdAndDelete(_id).exec()
  }
}
