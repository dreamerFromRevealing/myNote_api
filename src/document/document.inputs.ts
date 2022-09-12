import {Field, InputType} from "@nestjs/graphql";
import {Schema as MongooseSchema} from 'mongoose';

@InputType()
export class CreateDocumentInput {
  @Field(() => String)
  title: string

  @Field(() => String, {nullable: true})
  parentFolderId?: string

  @Field(() => String)
  typeFile: string

  @Field(() => String)
  parentWorkspaceId: MongooseSchema.Types.ObjectId
}

@InputType()
export class ListDocumentInput {
  @Field(() => String, {nullable: true})
  _id?: MongooseSchema.Types.ObjectId

  @Field(() => String, {nullable: true})
  title?: string

  @Field(() => String, {nullable: true})
  folderPathname?: string

  @Field(() => String, {nullable: true})
  content?: string

  @Field(() => String, {nullable: true})
  typeFile?: string

  @Field(() => String, {nullable: true})
  parentWorkspaceId?: MongooseSchema.Types.ObjectId
}

@InputType()
export class UpdateDocumentInput {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId

  @Field(() => String, {nullable: true})
  title?: string

  @Field(() => String, {nullable: true})
  folderPathname?: string

  @Field(() => String, {nullable: true})
  content?: string

  @Field(() => String, {nullable: true})
  typeFile?: string

  @Field(() => String, {nullable: true})
  parentWorkspaceId?: MongooseSchema.Types.ObjectId
}


@InputType()
export class ChangeParentIdInput {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId

  @Field(() => String, {nullable: true})
  newParentId?: MongooseSchema.Types.ObjectId
}