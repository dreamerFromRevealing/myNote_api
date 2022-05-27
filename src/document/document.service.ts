import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Document, DocumentDocument} from "./document.model";
import {Model, Schema as MongooseSchema} from "mongoose";
import {CreateDocumentInput, ListDocumentInput, UpdateDocumentInput} from "./document.inputs";

@Injectable()
export class DocumentService {
  constructor(@InjectModel(Document.name) private  documentModel: Model<DocumentDocument>) {}

  create(payload: CreateDocumentInput) {
    const createdDocument = new this.documentModel({...payload, content: ''})
    return createdDocument.save()
  }

  getById(_id: MongooseSchema.Types.ObjectId) {
    return this.documentModel.findById(_id).exec()
  }

  list(filters: ListDocumentInput) {
    return this.documentModel.find({...filters}).exec()
  }

  update(payload: UpdateDocumentInput) {
    return this.documentModel
      .findByIdAndUpdate(payload._id, payload, {new: true})
      .exec()
  }

  delete(_id: MongooseSchema.Types.ObjectId) {
    return this.documentModel.findByIdAndDelete(_id).exec()
  }

}
