import {Field, ObjectType} from "@nestjs/graphql";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document as MongoDocument, Schema as MongooseSchema} from "mongoose";
import {Workspace} from "../workspace/workspace.model";
import {Folder} from "../folder/folder.model";

@ObjectType()
@Schema()
export class Document {
  @Field(() => String, { nullable: true })
  _id?: MongooseSchema.Types.ObjectId

  @Field(() => String, { nullable: true })
  @Prop()
  title?: string

  @Field(() => String, { nullable: true })
  @Prop()
  folderPathname?: string

  @Field(() => Workspace, {nullable: true})
  @Prop({type: MongooseSchema.Types.ObjectId, ref: Workspace.name})
  parentWorkspaceId?: MongooseSchema.Types.ObjectId | Workspace

  @Field(() => Folder, {nullable: true})
  @Prop({type: MongooseSchema.Types.ObjectId, ref: 'Folder'})
  parentFolderId?: MongooseSchema.Types.ObjectId | Folder

  @Field(() => String, { nullable: true })
  @Prop()
  content?: string
}

export type DocumentDocument = Document & MongoDocument

export const DocumentSchema = SchemaFactory.createForClass(Document)