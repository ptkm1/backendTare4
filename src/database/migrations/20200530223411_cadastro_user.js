exports.up = function(knex) {
    return knex.schema.createTable('usuarios', function (table){
        table.string('id').primary();
        table.string('nome').notNullable();
        table.string('email').unique().notNullable();
        table.text('senha').notNullable();
        table.integer('cpfcnpj').unique().notNullable();
        table.string('cidade');
        table.string('uf', 2);
    }).then(()=> {
        console.log("inserido na Tabela!")
    })
    
};

exports.down = function(knex) {
    return knex.schema.dropTable('usuarios');
};
