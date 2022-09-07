import {forwardRef, Inject, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Document, DocumentDocument} from "./document.model";
import {Model, Schema as MongooseSchema} from "mongoose";
import {ChangeParentIdInput, CreateDocumentInput, ListDocumentInput, UpdateDocumentInput} from "./document.inputs";
import { FolderService } from 'src/folder/folder.service';

@Injectable()
export class DocumentService {
  constructor(
    @InjectModel(Document.name) private documentModel: Model<DocumentDocument>,
    @Inject(forwardRef(() => FolderService))
    private folderService: FolderService
  ) {}

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

  async changeParentId(payload: ChangeParentIdInput) {
    if (!payload.newParentId) {
      return this.documentModel.findByIdAndUpdate(payload._id, {parentFolderId: null, folderPathname: null}).exec()
    }
    const document = await this.documentModel.findById(payload._id).exec()
    const newParent = await this.folderService.getById(payload.newParentId)
    document.folderPathname = `${newParent?.pathname}`
    document.parentFolderId = newParent._id
    return document.save()
  }
}
