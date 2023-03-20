import {Field, ObjectType} from "@nestjs/graphql";
import {Document as MongoDocument, Schema as MongooseSchema} from 'mongoose';
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Workspace} from "../workspace/workspace.model";

@ObjectType()
@Schema()
export class Project {
  @Field(() => String, {nullable: true})
  _id?: MongooseSchema.Types.ObjectId

  @Field(() => String, {nullable: true})
  @Prop()
  title?: string

  @Field(() => Workspace, {nullable: true})
  @Prop({type: MongooseSchema.Types.ObjectId, ref: Workspace.name})
  parentWorkspaceId?: MongooseSchema.Types.ObjectId | Workspace
}

export type ProjectDocument = Project & MongoDocument

export const ProjectSchema = SchemaFactory.createForClass(Project)