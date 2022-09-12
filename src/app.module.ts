import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { HobbyModule } from './hobby/hobby.module';
import {PersonModule} from "./person/person.module";
import { FolderModule } from './folder/folder.module';
import { DocumentModule } from './document/document.module';
import {Folder, FolderSchema} from "./folder/folder.model";
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { WorkspaceModule } from './workspace/workspace.module';
import {Document, DocumentSchema} from "./document/document.model";

const url = process.env.MONGO_URL || 'localhost';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`mongodb+srv://admin:admin@cluster0.kyuxl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: 'schema.gql',
      driver: ApolloDriver,
      subscriptions: {
        'graphql-ws': true,
        'subscriptions-transport-ws': true,
      },
    }),
    MongooseModule.forFeature([{name: Folder.name, schema: FolderSchema}, {name: Document.name, schema: DocumentSchema}]),
    WorkspaceModule,
    PersonModule,
    HobbyModule,
    FolderModule,
    DocumentModule,
    WorkspaceModule,
  ],
  controllers: [AppController],
  providers: [ AppService],
})
export class AppModule {}
