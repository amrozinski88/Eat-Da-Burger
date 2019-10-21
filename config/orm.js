const connection = require("./connection.js");
const objToSql = (object) => {
    let whatToUpdate = [];
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            let value = object[key];
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = `'${value}'`
            }
            whatToUpdate.push(`${key}=${value}`)
        }

    }
    return whatToUpdate.toString()
}

const orm = {
    selectAll: (cb) => {
        connection.query("select * from burgers", function (err, result) {
            if (err) {
                throw err;
            }
            cb(result)
        })
    },

    insertOne: (cols, name, cb) => {
        connection.query(`insert into burgers (${cols.toString()}) values (?)`,
            name,
            (err, res) => {
                if (err) {
                    throw err
                }
                cb(res)
            }
        )

    },

    updateOne: (colValsObj, condition, cb)=>{
        connection.query(`update burgers set ${objToSql(colValsObj)} where ${condition} `,(err,res)=>{
            if(err){
                throw err
            }
            cb(res)
        })
    }

}



module.exports = orm;