import {Field, InputType} from "@nestjs/graphql";
import {Schema as MongooseSchema} from "mongoose";

@InputType()
export class CreateTodoBoardInput {
  @Field(() => String)
  title: string

  @Field(() => String)
  parentTodoBoxId: MongooseSchema.Types.ObjectId

  @Field(() => String)
  parentProjectId?: MongooseSchema.Types.ObjectId
}

@InputType()
export class ListTodoBoardInput {
  @Field(() => String, {nullable: true})
  _id?: MongooseSchema.Types.ObjectId

  @Field(() => String, {nullable: true})
  title?: string

  @Field(() => String, {nullable: true})
  parentTodoBoxId?: MongooseSchema.Types.ObjectId

  @Field(() => String, {nullable: true})
  childrenTodoCollectionIds?: MongooseSchema.Types.ObjectId

  @Field(() => String, {nullable: true})
  parentProjectId?: MongooseSchema.Types.ObjectId
}

@InputType()
export class UpdateTodoBoardInput {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId

  @Field(() => String, {nullable: true})
  title?: string

  @Field(() => String, {nullable: true})
  parentTodoBoxId?: MongooseSchema.Types.ObjectId

  @Field(() => String, {nullable: true})
  childrenTodoCollectionIds?: MongooseSchema.Types.ObjectId

  @Field(() => String, {nullable: true})
  parentProjectId?: MongooseSchema.Types.ObjectId
}