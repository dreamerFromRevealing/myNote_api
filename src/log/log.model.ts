import {Field, ObjectType} from "@nestjs/graphql";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document as MongoDocument, Schema as MongooseSchema} from "mongoose";
import {Project} from "../project/project.model";
import {LogbookFolder} from "src/logbook-folder/logbook-folder.model";

@ObjectType()
@Schema()
export class Log {
  @Field(() => String)
  _id?: MongooseSchema.Types.ObjectId

  @Field(() => String)
  @Prop()
  title?: string

  @Field(() => Project)
  @Prop({type: MongooseSchema.Types.ObjectId, ref: Project.name})
  parentProjectId: MongooseSchema.Types.ObjectId | Project

  @Field(() => LogbookFolder)
  @Prop({type: MongooseSchema.Types.ObjectId, ref: 'LogbookFolder'})
  parentLogbookFolderId?: MongooseSchema.Types.ObjectId | LogbookFolder

  @Field(() => String, { nullable: true })
  @Prop()
  content?: string
}

export type LogDocument = Log & MongoDocument

export const LogSchema = SchemaFactory.createForClass(Log)