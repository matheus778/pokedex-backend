import { Router } from 'express';
const routes = Router();
import PokemonController from './controller/PokemonController';

routes.get('/listar', PokemonController.listar);
routes.post('/cadastrar', PokemonController.cadastrar);

export default routes;
