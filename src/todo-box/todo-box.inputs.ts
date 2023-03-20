import {Field, InputType} from "@nestjs/graphql";
import {Schema as MongooseSchema} from "mongoose";

@InputType()
export class CreateTodoBoxInput {
  @Field(() => String)
  title: string

  @Field(() => String, {nullable: true})
  parentFolderId?: string

  @Field(() => String)
  parentProjectId: MongooseSchema.Types.ObjectId
}

@InputType()
export class ListTodoBoxInput {
  @Field(() => String, {nullable: true})
  _id?: MongooseSchema.Types.ObjectId

  @Field(() => String, {nullable: true})
  title?: string

  @Field(() => String, {nullable: true})
  parentProjectId?: MongooseSchema.Types.ObjectId

  @Field(() => String, {nullable: true})
  parentFolderId?: MongooseSchema.Types.ObjectId

  @Field(() => String, {nullable: true})
  childTodoBoardIds?: MongooseSchema.Types.ObjectId
}

@InputType()
export class UpdateTodoBoxInput {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId

  @Field(() => String, {nullable: true})
  title?: string

  @Field(() => String, {nullable: true})
  parentProjectId?: MongooseSchema.Types.ObjectId

  @Field(() => String, {nullable: true})
  parentFolderId?: MongooseSchema.Types.ObjectId

  @Field(() => String, {nullable: true})
  childTodoBoardIds?: MongooseSchema.Types.ObjectId
}

