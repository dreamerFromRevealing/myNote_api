import {forwardRef, Module} from '@nestjs/common';
import {DocumentService} from './document.service';
import {DocumentResolver} from './document.resolver';
import {MongooseModule} from "@nestjs/mongoose";
import {Document, DocumentSchema} from "./document.model";
import {FolderModule} from "../folder/folder.module";
import {Folder, FolderSchema} from "../folder/folder.model";

@Module({
  imports: [
    MongooseModule.forFeature([{name: Document.name, schema: DocumentSchema}, {name: Folder.name, schema: FolderSchema}]),
   forwardRef(() =>  FolderModule)
  ],
  exports: [DocumentService],
  providers: [DocumentService, DocumentResolver]
})
export class DocumentModule {}
