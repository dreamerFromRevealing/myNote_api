import {Field, InputType} from "@nestjs/graphql";
import {Schema as MongooseSchema} from 'mongoose';

@InputType()
export class CreateProjectInput {
  @Field(() => String)
  title: string

  @Field(() => String)
  parentWorkspaceId: MongooseSchema.Types.ObjectId
}

@InputType()
export class ListProjectInput {
  @Field(() => String, {nullable: true})
  _id?: MongooseSchema.Types.ObjectId

  @Field(() => String, {nullable: true})
  title?: string

  @Field(() => String)
  parentWorkspaceId?: MongooseSchema.Types.ObjectId
}

@InputType()
export class UpdateProjectInput {
  @Field(() => String)
  _id?: MongooseSchema.Types.ObjectId

  @Field(() => String, {nullable: true})
  title?: string

  @Field(() => String)
  parentWorkspaceId?: MongooseSchema.Types.ObjectId
}