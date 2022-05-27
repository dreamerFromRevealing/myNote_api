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

const url = process.env.MONGO_URL || 'localhost';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`mongodb+srv://admin:admin@cluster0.kyuxl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`),
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
    MongooseModule.forFeature([{name: Folder.name, schema: FolderSchema}]),
    PersonModule,
    HobbyModule,
    FolderModule,
    DocumentModule,
  ],
  controllers: [AppController],
  providers: [ AppService],
})
export class AppModule {}
