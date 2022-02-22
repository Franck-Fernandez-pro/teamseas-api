import { Module } from '@nestjs/common';
import { GraphQLISODateTime, GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DonationsModule } from './donations/donations.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      playground: false,
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      resolvers: { DateTime: GraphQLISODateTime },
    }),
    DonationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
