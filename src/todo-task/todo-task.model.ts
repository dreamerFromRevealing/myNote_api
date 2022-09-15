import {Field, ObjectType} from "@nestjs/graphql";
import {Document as MongoDocument, Schema as MongooseSchema} from 'mongoose';
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Workspace} from "../workspace/workspace.model";
import {Folder} from "../folder/folder.model";
import {TodoBoard} from "../todo-board/todo-board.model";
import {TodoCollection} from "../todo-collection/todo-collection.model";

@ObjectType()
@Schema()
export class TodoTask {
  @Field(() => String, {nullable: true})
  _id?: MongooseSchema.Types.ObjectId

  @Field(() => String, {nullable: true})
  @Prop()
  title?: string

  @Field(() => String, {nullable: true})
  @Prop()
  description?: string

  @Field(() => TodoCollection)
  @Prop({type: MongooseSchema.Types.ObjectId, ref: TodoCollection.name})
  parentTodoCollectionParentId: MongooseSchema.Types.ObjectId | TodoCollection

}

export type TodoTaskDocument = TodoTask & MongoDocument

export const TodoTaskSchema = SchemaFactory.createForClass(TodoTask)