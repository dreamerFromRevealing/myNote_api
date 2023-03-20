import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model, Schema as MongooseSchema} from "mongoose";
import {Project, ProjectDocument} from "./project.model";
import {CreateProjectInput, ListProjectInput, UpdateProjectInput} from "./project.inputs";

@Injectable()
export class ProjectService {
  constructor(@InjectModel(Project.name) private projectModel: Model<ProjectDocument>) {}


  create(payload: CreateProjectInput) {
    const createdProject = new this.projectModel(payload)
    return createdProject.save()
  }

  getById(_id: MongooseSchema.Types.ObjectId) {
    return this.projectModel.findById(_id).exec()
  }

  async list(filters: ListProjectInput) {
    return await this.projectModel.find({...filters}).exec()
  }

  update(payload: UpdateProjectInput) {
    return this.projectModel
      .findByIdAndUpdate(payload._id, payload, {new: true})
      .exec()
  }

  delete(_id: MongooseSchema.Types.ObjectId) {
    return this.projectModel.findByIdAndDelete(_id).exec()
  }

}
