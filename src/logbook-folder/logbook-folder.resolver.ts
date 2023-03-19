import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {Schema as MongooseSchema} from "mongoose";
import {LogbookFolderService} from "./logbook-folder.service";
import {CreateLogbookFolderInput, ListLogbookFolderInput, UpdateLogbookFolderInput} from "./logbook-folder.inputs";
import {LogbookFolder} from './logbook-folder.model';

@Resolver()
export class LogbookFolderResolver {
  constructor(private logbookFolderService: LogbookFolderService) {}

  @Query(() => LogbookFolder)
  async logbookFolder(@Args('_id', {type: () => String}) _id: MongooseSchema.Types.ObjectId) {
    return this.logbookFolderService.getById(_id)
  }

  @Query(() => [LogbookFolder])
  async logbookFolders (@Args('filters', {nullable: true}) filters?: ListLogbookFolderInput) {
    return this.logbookFolderService.list(filters)
  }

  @Mutation(() => LogbookFolder)
  async createLogbookFolder(@Args('payload') payload: CreateLogbookFolderInput) {
    return this.logbookFolderService.create(payload)
  }

  @Mutation(() => LogbookFolder)
  async updateLogbookFolder(@Args('payload') payload: UpdateLogbookFolderInput) {
    return this.logbookFolderService.update(payload)
  }

  @Mutation(() => LogbookFolder)
  async deleteLogbookFolder(
    @Args('_id', {type: () => String}) _id: MongooseSchema.Types.ObjectId
  ) {
    return this.logbookFolderService.delete(_id)
  }
}
