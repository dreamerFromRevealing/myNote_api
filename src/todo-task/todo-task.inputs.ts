import {Field, InputType} from "@nestjs/graphql";
import {Schema as MongooseSchema} from "mongoose";

@InputType()
export class CreateTodoTaskInput {
  @Field(() => String)
  title: string

  @Field(() => Number)
  position: number

  @Field(() => String, {nullable: true})
  description?: string

  @Field(() => String)
  parentTodoCollectionId: MongooseSchema.Types.ObjectId
}

@InputType()
export class ListTodoTaskInput {
  @Field(() => String, {nullable: true})
  _id?: MongooseSchema.Types.ObjectId

  @Field(() => String, {nullable: true})
  title?: string

  @Field(() => String, {nullable: true})
  description?: string

  @Field(() => Number, {nullable: true})
  position?: number

  @Field(() => String, {nullable: true})
  parentTodoCollectionId?: MongooseSchema.Types.ObjectId
}

@InputType()
export class UpdateTodoTaskInput {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId

  @Field(() => String, {nullable: true})
  title?: string

  @Field(() => String, {nullable: true})
  description?: string

  @Field(() => Number, {nullable: true})
  position?: number

  @Field(() => String, {nullable: true})
  parentTodoCollectionId?: MongooseSchema.Types.ObjectId
}

@InputType()
export class UpdatePositionTodoTaskInput {

}