import {Module} from '@nestjs/common';
import {DocumentService} from './document.service';
import {DocumentResolver} from './document.resolver';
import {MongooseModule} from "@nestjs/mongoose";
import {Document, DocumentSchema} from "./document.model";

@Module({
  imports: [
    MongooseModule.forFeature([{name: Document.name, schema: DocumentSchema}])
  ],
  exports: [DocumentService],
  providers: [DocumentService, DocumentResolver]
})
export class DocumentModule {}
