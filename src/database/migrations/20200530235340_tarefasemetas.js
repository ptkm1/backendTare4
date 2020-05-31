
exports.up = function(knex) {
    return knex.schema.createTable('tarefas', function (table){
        table.increments();

        table.string('titulo').notNullable();
        table.string('desc').notNullable();

        table.string('usuario_id').notNullable();

        table.foreign('usuario_id').references('id').inTable('usuarios');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('tarefas')
};
