import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import DatabaseConfig from './config/database.config';
import { ConnectOptions } from 'typeorm';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql'
    }),
    TypeOrmModule.forRoot(DatabaseConfig() as ConnectOptions)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
