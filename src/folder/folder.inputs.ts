import {Field, InputType} from "@nestjs/graphql";
import {Schema as MongooseSchema} from 'mongoose';

@InputType()
export class CreateFolderInput {
  @Field(() => String)
  title: string

  @Field(() => String, {nullable: true})
  parentFolderId?: MongooseSchema.Types.ObjectId

  @Field(() => String)
  parentWorkspaceId?: MongooseSchema.Types.ObjectId
}

@InputType()
export class ListFolderInput {
  @Field(() => String, {nullable: true})
  _id?: MongooseSchema.Types.ObjectId

  @Field(() => String, {nullable: true})
  title?: string

  @Field(() => String, {nullable: true})
  pathname?: string

  @Field(() => String, {nullable: true})
  childFoldersIds?: MongooseSchema.Types.ObjectId[]

  @Field(() => String, {nullable: true})
  parentWorkspaceId?: MongooseSchema.Types.ObjectId

  @Field(() => String, {nullable: true})
  childDocsIds?: MongooseSchema.Types.ObjectId[]
}

@InputType()
export class UpdateFolderInput {
  @Field(() => String)
  _id?: MongooseSchema.Types.ObjectId

  @Field(() => String, {nullable: true})
  title?: string

  @Field(() => String, {nullable: true})
  pathname?: string

  @Field(() => String, {nullable: true})
  childFoldersIds?: MongooseSchema.Types.ObjectId[]

  @Field(() => String, {nullable: true})
  childDocsIds?: MongooseSchema.Types.ObjectId[]

  @Field(() => String, {nullable: true})
  parentWorkspaceId?: MongooseSchema.Types.ObjectId
}