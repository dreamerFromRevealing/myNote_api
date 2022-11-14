import {Field, ObjectType} from "@nestjs/graphql";
import {Document as MongoDocument, Schema as MongooseSchema} from 'mongoose';
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Workspace} from "../workspace/workspace.model";
import {Folder} from "../folder/folder.model";
import {TodoBoard} from "../todo-board/todo-board.model";
import {TodoTask} from "../todo-task/todo-task.model";

@ObjectType()
@Schema()
export class TodoCollection {
  @Field(() => String, {nullable: true})
  _id?: MongooseSchema.Types.ObjectId

  @Field(() => String, {nullable: true})
  @Prop()
  title?: string

  @Field(() => String, {nullable: true})
  @Prop()
  color?: string

  @Field(() => TodoBoard)
  @Prop({type: MongooseSchema.Types.ObjectId, ref: 'TodoBoard'})
  parentTodoBoardParentId: MongooseSchema.Types.ObjectId | TodoBoard

  @Field(() => TodoTask, {nullable: true})
  @Prop({type: MongooseSchema.Types.ObjectId, ref: TodoTask.name})
  childrenTodoTaskIds: MongooseSchema.Types.ObjectId[] | TodoTask[]

}

export type TodoCollectionDocument = TodoCollection & MongoDocument

export const TodoCollectionSchema = SchemaFactory.createForClass(TodoCollection)