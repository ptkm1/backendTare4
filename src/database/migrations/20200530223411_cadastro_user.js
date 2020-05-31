exports.up = function(knex) {
    return knex.schema.createTable('usuarios', function (table){
        table.string('id').primary();
        table.string('nome').notNullable();
        table.string('email').notNullable();
        table.integer('senha').notNullable();
        table.integer('cpfcnpj').notNullable();
        table.string('cidade');
        table.string('uf', 2);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('usuarios');
};
