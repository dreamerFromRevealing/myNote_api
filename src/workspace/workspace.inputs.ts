import {Field, InputType} from "@nestjs/graphql";
import {Schema as MongooseSchema} from 'mongoose';

@InputType()
export class CreateWorkspaceInput {
  @Field(() => String)
  title: string
}

@InputType()
export class ListWorkspacesInput {
  @Field(() => String, {nullable: true})
  _id?: MongooseSchema.Types.ObjectId

  @Field(() => String, {nullable: true})
  title?: string
}

@InputType()
export class UpdateWorkspaceInput {
  @Field(() => String)
  _id?: MongooseSchema.Types.ObjectId

  @Field(() => String, {nullable: true})
  title?: string
}