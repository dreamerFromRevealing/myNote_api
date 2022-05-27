import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Folder, FolderDocument} from "./folder.model";
import {Model, Schema as MongooseSchema} from "mongoose";
import {CreateFolderInput, ListFolderInput, UpdateFolderInput} from "./folder.inputs";
import {DocumentService} from "../document/document.service";

@Injectable()
export class FolderService {
  constructor(
    @InjectModel(Folder.name) private folderModel: Model<FolderDocument>,
    private documentService: DocumentService
  ) {}


  create(payload: CreateFolderInput) {
    const createdFolder = new this.folderModel(payload)
    return createdFolder.save()
  }

  getById(_id: MongooseSchema.Types.ObjectId) {
    return this.folderModel.findById(_id).exec()
  }

  list(filters: ListFolderInput) {
    return this.folderModel.find({...filters}).exec()
  }

  update(payload: UpdateFolderInput) {
    return this.folderModel
      .findByIdAndUpdate(payload._id, payload, {new: true})
      .exec()
  }

  delete(_id: MongooseSchema.Types.ObjectId) {
    return this.folderModel.findByIdAndDelete(_id).exec()
  }

}
