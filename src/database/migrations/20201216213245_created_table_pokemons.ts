import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('pokemons', (table)=>{
    table.increments('id');
    table.text('nome').notNullable();
    table.text('tipo').notNullable();
    table.text('descricao').notNullable();
    table.text('imagem').notNullable();

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('pokemons');
}

