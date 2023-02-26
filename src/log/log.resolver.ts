import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {Logbook} from "../logbook/logbook.model";
import {Schema as MongooseSchema} from "mongoose";
import {LogService} from "./log.service";
import {Log} from "./log.model";
import {CreateLogInput, ListLogInput, UpdateLogInput} from "./log.inputs";

@Resolver()
export class LogResolver {
  constructor(private logService: LogService) {}

  @Query(() => Logbook)
  async log(@Args('_id', {type: () => String}) _id: MongooseSchema.Types.ObjectId) {
    return this.logService.getById(_id)
  }

  @Query(() => [Log])
  async logs (@Args('filters', {nullable: true}) filters?: ListLogInput) {
    return this.logService.list(filters)
  }

  @Mutation(() => Log)
  async createLog(@Args('payload') payload: CreateLogInput) {
    return this.logService.create(payload)
  }

  @Mutation(() => Log)
  async updateLog(@Args('payload') payload: UpdateLogInput) {
    return this.logService.update(payload)
  }

  @Mutation(() => Log)
  async deleteLog(
    @Args('_id', {type: () => String}) _id: MongooseSchema.Types.ObjectId
  ) {
    return this.logService.delete(_id)
  }
}
