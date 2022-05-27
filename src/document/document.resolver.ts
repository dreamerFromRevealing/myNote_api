import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {Document} from "./document.model";
import {DocumentService} from "./document.service";
import {Schema as MongooseSchema} from 'mongoose';
import {CreateDocumentInput, ListDocumentInput, UpdateDocumentInput} from "./document.inputs";

@Resolver(() =>Document)
export class DocumentResolver {
  constructor(private documentService: DocumentService) {}

  @Query(() => Document)
  async document(@Args('_id', {type: () => String}) _id: MongooseSchema.Types.ObjectId) {
    return this.documentService.getById(_id)
  }

  @Query(() => [Document])
  async documents (@Args('filters', {nullable: true}) filters?: ListDocumentInput) {
    return this.documentService.list(filters)
  }

  @Mutation(() => Document)
  async createDocument(@Args('payload') payload: CreateDocumentInput) {
    return this.documentService.create(payload)
  }

  @Mutation(() => Document)
  async updateDocument(@Args('payload') payload: UpdateDocumentInput) {
    return this.documentService.update(payload)
  }

  @Mutation(() => Document)
  async deleteDocument(
    @Args('_id', {type: () => String}) _id: MongooseSchema.Types.ObjectId
  ) {
    return this.documentService.delete(_id)
  }
}
