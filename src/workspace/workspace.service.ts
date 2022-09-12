import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model, Schema as MongooseSchema} from "mongoose";
import {Workspace, WorkspaceDocument} from "./workspace.model";
import {CreateWorkspaceInput, ListWorkspacesInput, UpdateWorkspaceInput} from "./workspace.inputs";

@Injectable()
export class WorkspaceService {
  constructor(@InjectModel(Workspace.name) private workspaceModel: Model<WorkspaceDocument>) {}

  create(payload: CreateWorkspaceInput) {
    const createdWorkspace = new this.workspaceModel(payload)
    return createdWorkspace.save()
  }

  getById(_id: MongooseSchema.Types.ObjectId) {
    return this.workspaceModel.findById(_id).exec()
  }

  list(filters: ListWorkspacesInput) {
    return this.workspaceModel.find({...filters}).exec()
  }

  update(payload: UpdateWorkspaceInput) {
    return this.workspaceModel
      .findByIdAndUpdate(payload._id, payload, {new: true})
      .exec()
  }

  delete(_id: MongooseSchema.Types.ObjectId) {
    return this.workspaceModel.findByIdAndDelete(_id).exec()
  }
}
