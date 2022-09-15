import {forwardRef, Inject, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Folder, FolderDocument} from "./folder.model";
import {Model, Schema as MongooseSchema} from "mongoose";
import {CreateFolderInput, ListFolderInput, UpdateFolderInput} from "./folder.inputs";
import {DocumentService} from "../document/document.service";
import {ChangeParentIdInput} from "../document/document.inputs";

@Injectable()
export class FolderService {
  constructor(
    @InjectModel(Folder.name) private folderModel: Model<FolderDocument>,
    @Inject(forwardRef(() => DocumentService)) private documentService: DocumentService
  ) {
  }


  create(payload: CreateFolderInput) {
    const createdFolder = new this.folderModel(payload)
    return createdFolder.save()
  }

  getById(_id: MongooseSchema.Types.ObjectId) {
    return this.folderModel.findById(_id).exec()
  }

 async list(filters: ListFolderInput) {
   return await this.folderModel.find({...filters}).populate('childDocsIds').populate('childFoldersIds').exec()
  }

  update(payload: UpdateFolderInput) {
    return this.folderModel
      .findByIdAndUpdate(payload._id, payload, {new: true})
      .exec()
  }

  delete(_id: MongooseSchema.Types.ObjectId) {
    return this.folderModel.findByIdAndDelete(_id).exec()
  }

  async changeParentId(payload: ChangeParentIdInput) {
    const folder = await this.folderModel.findById(payload._id).exec()

    if (!payload.newParentId) {
      return this.folderModel.findByIdAndUpdate(payload._id, {
        parentFolderId: null,
        pathname: `/${folder.title}`
      }).exec()
    }

    const newParent = await this.folderModel.findById(payload.newParentId).exec()
    folder.pathname = `${newParent?.pathname}/${folder.title}`
    folder.parentFolderId = newParent._id
    return folder.save()

  }
}
