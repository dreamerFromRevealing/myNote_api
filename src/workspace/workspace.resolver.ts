import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {Workspace} from "./workspace.model";
import {WorkspaceService} from "./workspace.service";
import {Folder} from "../folder/folder.model";
import {Schema as MongooseSchema} from "mongoose";
import {CreateWorkspaceInput, ListWorkspacesInput, UpdateWorkspaceInput} from "./workspace.inputs";

@Resolver(() => Workspace)
export class WorkspaceResolver {
  constructor(private workspaceService: WorkspaceService) {}

  @Query(() => Workspace)
  async workspace(
    @Args('_id', {type: () => String}) _id: MongooseSchema.Types.ObjectId
  ) {
    return this.workspaceService.getById(_id)
  }

  @Query(() => [Workspace])
  async workspaces(
    @Args('filters', {nullable: true}) filters?: ListWorkspacesInput
  ) {
    return this.workspaceService.list(filters)
  }


  @Mutation(() => Workspace)
  async createWorkspace (@Args('payload') payload: CreateWorkspaceInput) {
    return this.workspaceService.create(payload)
  }

  @Mutation(() => Workspace)
  async updateWorkspace (@Args('payload') payload: UpdateWorkspaceInput) {
    return this.workspaceService.update(payload)
  }

  @Mutation(() => Workspace)
  async deleteWorkspace(
    @Args('_id', {type: () => String}) _id: MongooseSchema.Types.ObjectId
  ) {
    return this.workspaceService.delete(_id)
  }
}
