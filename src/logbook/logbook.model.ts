import {Field, ObjectType} from "@nestjs/graphql";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document as MongoDocument, Schema as MongooseSchema} from "mongoose";
import {Workspace} from "../workspace/workspace.model";
import {Folder} from "../folder/folder.model";
import {Project} from "../project/project.model";

@ObjectType()
@Schema()
export class Logbook {
  @Field(() => String, { nullable: true })
  _id?: MongooseSchema.Types.ObjectId

  @Field(() => String, { nullable: true })
  @Prop()
  title?: string

  @Field(() => Project, {nullable: true})
  @Prop({type: MongooseSchema.Types.ObjectId, ref: 'Project'})
  parentProjectId?: MongooseSchema.Types.ObjectId | Project
}

export type LogbookDocument = Logbook & MongoDocument

export const LogbookSchema = SchemaFactory.createForClass(Logbook)