import {Field, ObjectType} from "@nestjs/graphql";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document as MongoDocument, Schema as MongooseSchema} from "mongoose";
import {Workspace} from "../workspace/workspace.model";
import {Folder} from "../folder/folder.model";
import {Project} from "../project/project.model";
import {Logbook} from "../logbook/logbook.model";

@ObjectType()
@Schema()
export class Log {
  @Field(() => String)
  _id?: MongooseSchema.Types.ObjectId

  @Field(() => String)
  @Prop()
  title?: string

  @Field(() => Workspace)
  @Prop({type: MongooseSchema.Types.ObjectId, ref: Workspace.name})
  parentWorkspaceId?: MongooseSchema.Types.ObjectId | Workspace

  @Field(() => Logbook)
  @Prop({type: MongooseSchema.Types.ObjectId, ref: 'Logbook'})
  parentLogbookId?: MongooseSchema.Types.ObjectId | Logbook

  @Field(() => String, { nullable: true })
  @Prop()
  content?: string
}

export type LogDocument = Log & MongoDocument

export const LogSchema = SchemaFactory.createForClass(Log)