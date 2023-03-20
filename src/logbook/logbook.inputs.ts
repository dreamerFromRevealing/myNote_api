import {Field, InputType} from "@nestjs/graphql";
import {Schema as MongooseSchema} from 'mongoose';

@InputType()
export class CreateLogbookInput {
  @Field(() => String)
  title: string

  @Field(() => String)
  parentProjectId: string
}

@InputType()
export class ListLogbookInput {
  @Field(() => String, {nullable: true})
  _id?: MongooseSchema.Types.ObjectId

  @Field(() => String, {nullable: true})
  title?: string

  @Field(() => String, {nullable: true})
  parentProjectId?: string
}

@InputType()
export class UpdateLogbookInput {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId

  @Field(() => String, {nullable: true})
  title?: string

  @Field(() => String, {nullable: true})
  parentProjectId?: string
}
