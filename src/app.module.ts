import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonsModule } from './pokemons/pokemons.module';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    ScheduleModule.forRoot(),
    MongooseModule.forRoot(
      process.env.MONGO_URL ||
        'mongodb+srv://admin:admin321@fullstack.gygqcmo.mongodb.net/?retryWrites=true&w=majority&appName=Fullstack',
    ),
    PokemonsModule,
  ],
})
export class AppModule {}
