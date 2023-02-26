import {Field, InputType} from "@nestjs/graphql";
import {Schema as MongooseSchema} from 'mongoose';

@InputType()
export class CreateLogInput {
  @Field(() => String)
  title: string

  @Field(() => String)
  parentLogbookId: string

  @Field(() => String)
  parentWorkspaceId: MongooseSchema.Types.ObjectId
}

@InputType()
export class ListLogInput {
  @Field(() => String, {nullable: true})
  _id?: MongooseSchema.Types.ObjectId

  @Field(() => String, {nullable: true})
  title?: string

  @Field(() => String, {nullable: true})
  parentLogbookId?: string

  @Field(() => String, {nullable: true})
  content?: string

  @Field(() => String, {nullable: true})
  parentWorkspaceId?: MongooseSchema.Types.ObjectId
}

@InputType()
export class UpdateLogInput {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId

  @Field(() => String, {nullable: true})
  title?: string

  @Field(() => String, {nullable: true})
  parentLogbookId?: string

  @Field(() => String, {nullable: true})
  content?: string

  @Field(() => String, {nullable: true})
  parentWorkspaceId?: MongooseSchema.Types.ObjectId
}
