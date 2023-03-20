import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {Schema as MongooseSchema} from "mongoose";
import {LogbookService} from "./logbook.service";
import {Logbook} from "./logbook.model";
import {CreateLogbookInput, ListLogbookInput, UpdateLogbookInput} from "./logbook.inputs";


@Resolver()
export class LogbookResolver {
  constructor(private logbookService: LogbookService) {}

  @Query(() => Logbook)
  async logbook(@Args('_id', {type: () => String}) _id: MongooseSchema.Types.ObjectId) {
    return this.logbookService.getById(_id)
  }

  @Query(() => [Logbook])
  async logbooks (@Args('filters', {nullable: true}) filters?: ListLogbookInput) {
    return this.logbookService.list(filters)
  }

  @Mutation(() => Logbook)
  async createLogbook(@Args('payload') payload: CreateLogbookInput) {
    return this.logbookService.create(payload)
  }

  @Mutation(() => Logbook)
  async updateLogbook(@Args('payload') payload: UpdateLogbookInput) {
    return this.logbookService.update(payload)
  }

  @Mutation(() => Logbook)
  async deleteLogbook(
    @Args('_id', {type: () => String}) _id: MongooseSchema.Types.ObjectId
  ) {
    return this.logbookService.delete(_id)
  }
}
