import {Field, ObjectType} from "@nestjs/graphql";
import {Document as MongoDocument, Schema as MongooseSchema} from 'mongoose';
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {TodoBox} from "../todo-box/todo-box.model";
import {TodoCollection} from "../todo-collection/todo-collection.model";
import {Workspace} from "../workspace/workspace.model";
import {Project} from "../project/project.model";
import {Logbook} from "../logbook/logbook.model";

@ObjectType()
@Schema()
export class LogbookFolder {
  @Field(() => String, {nullable: true})
  _id?: MongooseSchema.Types.ObjectId

  @Field(() => String, {nullable: true})
  @Prop()
  title?: string

  @Field(() => Logbook)
  @Prop({type: MongooseSchema.Types.ObjectId, ref: Logbook.name})
  parentLogbookId: MongooseSchema.Types.ObjectId | Logbook

  @Field(() => Project, {nullable: true})
  @Prop({type: MongooseSchema.Types.ObjectId, ref: 'Project'})
  parentProjectId?: MongooseSchema.Types.ObjectId | Project
}

export type LogbookFolderDocument = LogbookFolder & MongoDocument

export const LogbookFolderSchema = SchemaFactory.createForClass(LogbookFolder)