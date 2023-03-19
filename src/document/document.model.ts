import {Field, ObjectType} from "@nestjs/graphql";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document as MongoDocument, Schema as MongooseSchema} from "mongoose";
import {Folder} from "../folder/folder.model";
import {Project} from "../project/project.model";

@ObjectType()
@Schema()
export class Document {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId

  @Field(() => String)
  @Prop()
  title: string

  @Field(() => String, { nullable: true })
  @Prop()
  folderPathname?: string

  @Field(() => Project)
  @Prop({type: MongooseSchema.Types.ObjectId, ref: Project.name})
  parentProjectId: MongooseSchema.Types.ObjectId | Project

  @Field(() => Folder, {nullable: true})
  @Prop({type: MongooseSchema.Types.ObjectId, ref: 'Folder'})
  parentFolderId?: MongooseSchema.Types.ObjectId | Folder

  @Field(() => String, { nullable: true })
  @Prop()
  content?: string
}

export type DocumentDocument = Document & MongoDocument

export const DocumentSchema = SchemaFactory.createForClass(Document)