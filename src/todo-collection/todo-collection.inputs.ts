import {Field, InputType} from "@nestjs/graphql";
import {Schema as MongooseSchema} from "mongoose";

@InputType()
export class CreateTodoCollectionInput {
  @Field(() => String)
  title: string

  @Field(() => String, {nullable: true})
  color?: string

  @Field(() => Number)
  position: number

  @Field(() => String)
  parentTodoBoardParentId: MongooseSchema.Types.ObjectId
}

@InputType()
export class ListTodoCollectionInput {
  @Field(() => String, {nullable: true})
  _id?: MongooseSchema.Types.ObjectId

  @Field(() => String, {nullable: true})
  title?: string

  @Field(() => String, {nullable: true})
  color?: string

  @Field(() => Number, {nullable: true})
  position?: number

  @Field(() => String, {nullable: true})
  parentTodoBoardParentId?: MongooseSchema.Types.ObjectId

  @Field(() => String, {nullable: true})
  childrenTodoTaskIds?: MongooseSchema.Types.ObjectId
}

@InputType()
export class UpdateTodoCollectionInput {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId

  @Field(() => String, {nullable: true})
  title?: string

  @Field(() => String, {nullable: true})
  color?: string

  @Field(() => Number, {nullable: true})
  position?: number

  @Field(() => String, {nullable: true})
  parentTodoBoardParentId?: MongooseSchema.Types.ObjectId

  @Field(() => String, {nullable: true})
  childrenTodoTaskIds?: MongooseSchema.Types.ObjectId
}

@InputType()
export class UpdatePositionTodoCollectionInput {
  @Field(() => String)
  firstId: MongooseSchema.Types.ObjectId

  @Field(() => String)
  secondId: MongooseSchema.Types.ObjectId

  @Field(() => Number)
  firstPosition: number

  @Field(() => Number)
  secondPosition: number
}
