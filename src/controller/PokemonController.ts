import { Request, Response } from 'express';
import knex from '../database/configConnection';

export default {
  async listar(req:Request, res:Response){
     const result = await knex('pokemons');
     res.send(result)
  }
}
