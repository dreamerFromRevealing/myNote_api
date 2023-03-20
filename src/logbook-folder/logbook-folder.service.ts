import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model, Schema as MongooseSchema} from "mongoose";
import {LogbookFolder, LogbookFolderDocument} from "./logbook-folder.model";
import {
  CreateLogbookFolderInput,
  ListLogbookFolderInput,
  UpdateLogbookFolderInput
} from "./logbook-folder.inputs";

@Injectable()
export class LogbookFolderService {
  constructor(@InjectModel(LogbookFolder.name) private logbookFolderModel: Model<LogbookFolderDocument>) {}

  create(payload: CreateLogbookFolderInput) {
    const createdLogbook = new this.logbookFolderModel({...payload, content: ''})
    return createdLogbook.save()
  }

  getById(_id: MongooseSchema.Types.ObjectId) {
    return this.logbookFolderModel.findById(_id).exec()
  }


  list(filters: ListLogbookFolderInput) {
    return this.logbookFolderModel.find({...filters}).exec()
  }

  update(payload: UpdateLogbookFolderInput) {
    return this.logbookFolderModel
      .findByIdAndUpdate(payload._id, payload, {new: true})
      .exec()
  }

  delete(_id: MongooseSchema.Types.ObjectId) {
    return this.logbookFolderModel.findByIdAndDelete(_id).exec()
  }
}
