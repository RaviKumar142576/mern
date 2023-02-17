const express = require('express');

const app = express();


app.get('/', (req, res)=>{
    res.send("THIS IS HOME PAGE")
}); 

app.get('/Contact', (req, res)=>{

    console.log(req.query)

    console.log(req.headers)

    res.send("THIS IS CONTACT PAGE")
}); 

app.get('/student/:id', (req, res)=>{

    console.log(req.params)
    const student = {
        name:"Ravi",
        class:"9th B",
        age:14,
        adderess:"Delhi"
    }

    res.send(student)
}); 

app.post('/contact', (req, res)=>{

    const contact=console.log("THIS IS POST")


    res.send(contact)
}); 


app.listen(3000, ()=>{
    console.log("Application started at port number ", 3000);
})
