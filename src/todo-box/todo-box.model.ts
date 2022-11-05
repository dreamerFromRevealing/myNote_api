import {Field, ObjectType} from "@nestjs/graphql";
import {Document as MongoDocument, Schema as MongooseSchema} from 'mongoose';
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Workspace} from "../workspace/workspace.model";
import {Folder} from "../folder/folder.model";
import {TodoBoard} from "../todo-board/todo-board.model";

@ObjectType()
@Schema()
export class TodoBox {
  @Field(() => String, {nullable: true})
  _id?: MongooseSchema.Types.ObjectId

  @Field(() => String, {nullable: true})
  @Prop()
  title?: string

  @Field(() => Workspace, {nullable: true})
  @Prop({type: MongooseSchema.Types.ObjectId, ref: Workspace.name})
  parentWorkspaceId?: MongooseSchema.Types.ObjectId | Workspace

  @Field(() => Folder, {nullable: true})
  @Prop({type: MongooseSchema.Types.ObjectId, ref: 'Folder'})
  parentFolderId?: MongooseSchema.Types.ObjectId | Folder

  @Field(() => [TodoBoard], { nullable: 'itemsAndList' })
  @Prop({type: [MongooseSchema.Types.ObjectId], ref: TodoBoard.name})
  childTodoBoardIds?: MongooseSchema.Types.ObjectId | TodoBoard[]
}

export type TodoBoxDocument = TodoBox & MongoDocument

export const TodoBoxSchema = SchemaFactory.createForClass(TodoBox)