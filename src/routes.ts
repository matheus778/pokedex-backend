import { Router } from 'express';
const routes = Router();
import PokemonController from './controller/PokemonController';

routes.get('/pokemons', PokemonController.listar);
routes.post('/pokemons', PokemonController.cadastrar);
routes.put('/pokemons/:id', PokemonController.update);
routes.delete('/pokemons/:id', PokemonController.deletar);

export default routes;
