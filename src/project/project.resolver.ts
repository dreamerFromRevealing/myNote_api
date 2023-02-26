import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {ProjectService} from "./project.service";
import {Schema as MongooseSchema} from "mongoose";
import {CreateProjectInput, ListProjectInput, UpdateProjectInput} from "./project.inputs";
import {Project} from "./project.model";

@Resolver()
export class ProjectResolver {
  constructor(private projectService: ProjectService) {}

  @Query(() => Project)
  async project(
    @Args('_id', {type: () => String}) _id: MongooseSchema.Types.ObjectId
  ) {
    return this.projectService.getById(_id)
  }

  @Query(() => [Project])
  async projects(
    @Args('filters', {nullable: true}) filters?: ListProjectInput
  ) {
    return this.projectService.list(filters)
  }

  @Mutation(() => Project)
  async createProject (@Args('payload') payload: CreateProjectInput) {
    return this.projectService.create(payload)
  }

  @Mutation(() => Project)
  async updateProject (@Args('payload') payload: UpdateProjectInput) {
    return this.projectService.update(payload)
  }

  @Mutation(() => Project)
  async deleteProject(
    @Args('_id', {type: () => String}) _id: MongooseSchema.Types.ObjectId
  ) {
    return this.projectService.delete(_id)
  }
}
