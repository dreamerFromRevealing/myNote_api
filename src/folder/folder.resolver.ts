import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {Folder} from "./folder.model";
import {Schema as MongooseSchema} from 'mongoose';
import {FolderService} from "./folder.service";
import {CreateFolderInput, ListFolderInput, UpdateFolderInput} from "./folder.inputs";

@Resolver(() => Folder)
export class FolderResolver {
  constructor(private folderService: FolderService) {}

  @Query(() => Folder)
  async folder(
    @Args('_id', {type: () => String}) _id: MongooseSchema.Types.ObjectId
  ) {
    return this.folderService.getById(_id)
  }

  @Query(() => [Folder])
  async folders(
    @Args('filters', {nullable: true}) filters?: ListFolderInput
  ) {
    return this.folderService.list(filters)
  }

  @Mutation(() => Folder)
  async createFolder (@Args('payload') payload: CreateFolderInput) {
    return this.folderService.create(payload)
  }

  @Mutation(() => Folder)
  async updateFolder (@Args('payload') payload: UpdateFolderInput) {
    return this.folderService.update(payload)
  }

  @Mutation(() => Folder)
  async deleteFolder(
    @Args('_id', {type: () => String}) _id: MongooseSchema.Types.ObjectId
  ) {
    return this.folderService.delete(_id)
  }


}
