const mysql = require('mysql')

class CarroDb{

static connect(){
    const connection = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database: "auto"
    })
    connection.connect()
    return connection
}

//realiza uma consu8lta no BD

static getCarros(callback){
    let connection = CarroDb.connection
    let sql = "select * from carro"
    let querry = connection.querry(sql, function(err,results,fields){
        if(err) throw err
        callback(results)
    })
    console.log(querry,sql)
    connection.end()

}
//realiza consulta pelo tipo
static getCarrosTipo(tipo, callback){
    let connection = CarrosDB.connection
    let sql = "select * from carro where tipo = " + tipo + "'"
    let querry = connection(sql, function(err,results,fields){
        if(err) throw err
        callback(results)
    })

console.log(querry,sql)
connection.end()
 
}


//salvar no BD
static save(carro, callback){
    const connection = CarroDB.connect()
    let sql = "insert into carro set ?"
    let query = connection.query (sql,carro,function(err,ressults,fields){
        if(err) throw err
        carro.id = results.insertId
        //retorna pela funçao callback
        callback(carro)
    })
    console.log(query,sql)
    connection.end()
}

//atualiza registro

static update(carro, callback){
    const connection = CarroDB.connect()
    let sql = "UPDATE CARRO GET ? where id = ?"
    let id = carro.id
    let query = connection.query(sql,carro, id, function (err,results, fields){
        if(err) throw err
        callback (carro)
    })
    console.log(query,sql)
    connection.end()

}
//apagar registro
static delete (carro, callback){
    let sql = "delete from carro where id =?"
    let id = carro.id
    let query = connection.query(sql, id , function(err,results,fields){
    if (err) throw err 
    callback(carro)
})
console.log(query,sql)
connection.end()

}
//apagar registro pelo bd
static delete (id, callback){
    let sql = "delete from carro where id =?"
    let query = connection.query(sql, id , function(err,results,fields){
    if (err) throw err 
    callback(carro)
})
console.log(query,sql)
connection.end()
}
module,exports = CarroDB