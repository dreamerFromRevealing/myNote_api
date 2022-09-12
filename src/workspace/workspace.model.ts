import {Field, ObjectType} from "@nestjs/graphql";
import {Document as MongoDocument, Schema as MongooseSchema} from 'mongoose';
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

@ObjectType()
@Schema()
export class Workspace {
  @Field(() => String, {nullable: true})
  _id?: MongooseSchema.Types.ObjectId

  @Field(() => String, {nullable: true})
  @Prop()
  title?: string
}

export type WorkspaceDocument = Workspace & MongoDocument

export const WorkspaceSchema = SchemaFactory.createForClass(Workspace)