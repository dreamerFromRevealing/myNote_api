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
import { TodoBoxModule } from './todo-box/todo-box.module';
import { TodoBoardModule } from './todo-board/todo-board.module';
import { TodoCollectionModule } from './todo-collection/todo-collection.module';
import { TodoTaskModule } from './todo-task/todo-task.module';
import { ProjectModule } from './project/project.module';
import { LogbookModule } from './logbook/logbook.module';
import { LogModule } from './log/log.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URL || 'mongodb://db:27017/MyNote'),
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
    TodoBoxModule,
    TodoBoardModule,
    TodoCollectionModule,
    TodoTaskModule,
    ProjectModule,
    LogbookModule,
    LogModule,
  ],
  controllers: [AppController],
  providers: [ AppService],
})
export class AppModule {}
