import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoiceModule } from './invoice/invoice.module';
import { CustomerModule } from './customer/customer.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'godwinekuma',
      password: 'mysecretpwd',
      database: 'invoiceapp',
      entities: ['dist/**/*.model.js'],
      synchronize: true,
    }),
    InvoiceModule,
    CustomerModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: 'schema.gql',
      driver: ApolloDriver
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
