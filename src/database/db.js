// importar sqlite3 
const sqlite3 = require("sqlite3").verbose();

// criar o objeto para operar o banco de dados
const db = new sqlite3.Database("./src/database/database.db");

module.exports = db;

//utilizar o objeto para as operações no banco
// db.serialize(() => {

//    // criar uma tabela com sqlite3
//    db.run(`
//       CREATE TABLE IF NOT EXISTS places (
//          id INTEGER PRIMARY KEY AUTOINCREMENT,
//          image TEXT,
//          name TEXT,
//          address TEXT,
//          address2 TEXT,
//          state TEXT,
//          city TEXT,
//          items TEXT 
//       );
//    `);

//    // inserir dados na tabela
//    const query = `
//       INSERT INTO places (
//          image, 
//          name,
//          address,
//          address2,
//          state,
//          city,
//          items
//       ) VALUES (?,?,?,?,?,?,?);   
//    `;

//    const values = [
//       "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1101&q=80",
//       "Papersider",
//       "Guilherme Gemballa, Jardim América",
//       "Número 360",
//       "Santa Catarina",
//       "Rio do Sul",
//       "Papéis e Papelão"
//    ];

//    function afterInsertData(err) {
//       if (err) {
//          return console.log(err);
//       }

//       console.log("Cadastrado com sucesso");
//       console.log(this);
//    }

//     db.run(query, values, afterInsertData);

//    // consultar dados

  
// //    // deletar dados 

//    // db.run(`DELETE FROM places`, function(err){
//    //    if (err) {
//    //       return console.log(err);
//    //    }

//    //    console.log("Registro deletado com sucesso!");

//    // });

//    db.all(` SELECT * FROM places`, function(err, rows) {      
//       if (err) {
//          return console.log(err);
//       }

//       console.log("Aqui estão os seus registros");
//       console.log(rows);
//    })

// })