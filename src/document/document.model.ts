import {Field, ObjectType} from "@nestjs/graphql";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document as MongoDocument, Schema as MongooseSchema} from "mongoose";

@ObjectType()
@Schema()
export class Document {
  @Field(() => String, { nullable: true })
  _id?: MongooseSchema.Types.ObjectId

  @Field(() => String, { nullable: true })
  @Prop()
  title?: string

  @Field(() => String, { nullable: true })
  @Prop()
  folderPathname?: string

  @Field(() => String, { nullable: true })
  @Prop()
  parentFolderId?: string

  @Field(() => String, { nullable: true })
  @Prop()
  content?: string
}

export type DocumentDocument = Document & MongoDocument

export const DocumentSchema = SchemaFactory.createForClass(Document)