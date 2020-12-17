import { json, Request, Response } from 'express';
import knex from '../database/configConnection';

export default {
  async listar(req:Request, res:Response){
     const result = await knex('pokemons');
     res.send(result)
  },

  async cadastrar(req:Request, res:Response) {
    let message:string

    try{
      await knex('pokemons').insert(req.body);
      message = "pokemon salvo com sucesso"
    }
    catch(error) {
      message = "Ops, não foi possivel salvar"
    }
   res.status(201).send({message: message})
  }
}
