/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pets').del()
  await knex('owners').del()


  await knex('owners').insert([
    {first_name: 'caston', last_name: 'boyd'},
    {first_name: 'sumaira', last_name: 'khan'},
    {first_name: 'ashé', last_name: 'collier'},
  ]);

  await knex('pets').insert([
    {name: 'rambo', type: 'dog', owner_id: 1},
    {name: 'buffy', type: 'dog', owner_id: 1}
  ]);
};
