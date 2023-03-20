import {Field, InputType} from "@nestjs/graphql";
import {Schema as MongooseSchema} from 'mongoose';

@InputType()
export class CreateLogbookFolderInput {
  @Field(() => String)
  title: string

  @Field(() => String)
  parentLogbookId: string

  @Field(() => String)
  parentProjectId?: MongooseSchema.Types.ObjectId


}


@InputType()
export class ListLogbookFolderInput {
  @Field(() => String, {nullable: true})
  _id?: MongooseSchema.Types.ObjectId

  @Field(() => String, {nullable: true})
  title?: string

  @Field(() => String, {nullable: true})
  parentLogbookId?: string

  @Field(() => String, {nullable: true})
  parentProjectId?: MongooseSchema.Types.ObjectId
}

@InputType()
export class UpdateLogbookFolderInput {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId

  @Field(() => String, {nullable: true})
  title?: string

  @Field(() => String, {nullable: true})
  parentLogbookId?: string

  @Field(() => String, {nullable: true})
  parentProjectId?: MongooseSchema.Types.ObjectId
}
