import { PartialType } from '@nestjs/mapped-types';
import { CreatePokemonDto } from './dto/CreatePokemon.dto';

export class UpdatePokemonDto extends PartialType(CreatePokemonDto) {}
