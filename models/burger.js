const orm = require("../config/orm");

const burger = {
    selectAll: cb => {
        orm.selectAll((response)=>{
            cb(response)
        })
    },
    insertOne: (burgerName,cb)=>{
        orm.insertOne([`burger_name`],burgerName,(response)=>{
            cb(response)
        })
    },
    updateOne: (colValsobj,condition,cb)=>{
        orm.updateOne(colValsobj,condition,(response)=>{
            cb(response)
        })
    }
}


module.exports = burger;