import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model, Schema as MongooseSchema} from "mongoose";
import {Logbook, LogbookDocument} from "./logbook.model";
import {CreateLogbookInput, ListLogbookInput, UpdateLogbookInput} from "./logbook.inputs";

@Injectable()
export class LogbookService {
  constructor(@InjectModel(Logbook.name) private logbookModel: Model<LogbookDocument>) {}

  create(payload: CreateLogbookInput) {
    const createdLogbook = new this.logbookModel({...payload, content: ''})
    return createdLogbook.save()
  }

  getById(_id: MongooseSchema.Types.ObjectId) {
    return this.logbookModel.findById(_id).exec()
  }

  list(filters: ListLogbookInput) {
    return this.logbookModel.find({...filters}).exec()
  }

  update(payload: UpdateLogbookInput) {
    return this.logbookModel
      .findByIdAndUpdate(payload._id, payload, {new: true})
      .exec()
  }

  delete(_id: MongooseSchema.Types.ObjectId) {
    return this.logbookModel.findByIdAndDelete(_id).exec()
  }
}
