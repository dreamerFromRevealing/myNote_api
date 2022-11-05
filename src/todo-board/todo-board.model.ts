import {Field, ObjectType} from "@nestjs/graphql";
import {Document as MongoDocument, Schema as MongooseSchema} from 'mongoose';
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {TodoBox} from "../todo-box/todo-box.model";
import {TodoCollection} from "../todo-collection/todo-collection.model";
import {Workspace} from "../workspace/workspace.model";

@ObjectType()
@Schema()
export class TodoBoard {
  @Field(() => String, {nullable: true})
  _id?: MongooseSchema.Types.ObjectId

  @Field(() => String, {nullable: true})
  @Prop()
  title?: string

  @Field(() => Workspace, {nullable: true})
  @Prop({type: MongooseSchema.Types.ObjectId, ref: Workspace.name})
  parentWorkspaceId?: MongooseSchema.Types.ObjectId | Workspace

  @Field(() => TodoBox, {nullable: true})
  @Prop({type: MongooseSchema.Types.ObjectId, ref: 'TodoBox'})
  parentTodoBoxId?: MongooseSchema.Types.ObjectId | TodoBox

  @Field(() => TodoCollection, {nullable: true})
  @Prop({type: MongooseSchema.Types.ObjectId, ref: TodoCollection.name})
  childrenTodoCollectionIds?: MongooseSchema.Types.ObjectId | TodoCollection
}

export type TodoBoardDocument = TodoBoard & MongoDocument

export const TodoBoardSchema = SchemaFactory.createForClass(TodoBoard)