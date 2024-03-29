import {Field, ObjectType} from "@nestjs/graphql";
import {Document as MongoDocument, Schema as MongooseSchema} from 'mongoose';
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "../document/document.model";
import {Workspace} from "../workspace/workspace.model";
import {Project} from "../project/project.model";

@ObjectType()
@Schema()
export class Folder {
  @Field(() => String, {nullable: true})
  _id?: MongooseSchema.Types.ObjectId

  @Field(() => String, {nullable: true})
  @Prop()
  title?: string

  @Field(() => String, {nullable: true})
  @Prop()
  pathname?: string

  @Field(() => Project)
  @Prop({type: MongooseSchema.Types.ObjectId, ref: Project.name})
  parentProjectId: MongooseSchema.Types.ObjectId | Project

  @Field(() => Folder, {nullable: true})
  @Prop({type: MongooseSchema.Types.ObjectId, ref: Folder.name})
  parentFolderId?: MongooseSchema.Types.ObjectId | Folder

  @Field(() => [Folder], { nullable: 'itemsAndList' })
  @Prop({type: [MongooseSchema.Types.ObjectId], ref: Folder.name})
  childFoldersIds?: Folder[]

  @Field(() => [Document], { nullable: 'itemsAndList' })
  @Prop({type: [MongooseSchema.Types.ObjectId], ref: 'Document'})
  childDocsIds?: MongooseSchema.Types.ObjectId | Document[]
}

export type FolderDocument = Folder & MongoDocument

export const FolderSchema = SchemaFactory.createForClass(Folder)