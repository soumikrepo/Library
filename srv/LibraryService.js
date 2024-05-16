const cds = require('@sap/cds')
var temp=0
module.exports = cds.service.impl(async (srv) => {

    srv.after("READ", "books", async(req)=>{
        req.forEach((element,index)=>{
           temp=index+1;
        })
        console.log(temp)
    })
})