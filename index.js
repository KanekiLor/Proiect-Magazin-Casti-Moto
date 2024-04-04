const express = require("express");
const fs= require('fs');
// const path=require('path');
// const sharp=require('sharp');
// const sass=require('sass');
// const ejs=require('ejs');


app= express();
console.log("Folder proiect", __dirname);
console.log("Cale fisier", __filename);
console.log("Director de lucru", process.cwd());

app.set("view engine","ejs");

app.use("/Resurse", express.static(__dirname+"/Resurse"));

app.get(["/","/home","index"],function(req,res){
    res.render("pagini/index");
 })
//app.get("/",function(req,res){
  //  res.sendFile(__dirname+"/proiect.html");
//})

app.get("/",function(req,res){
   res.render("pagini/index");
})

app.get("/cerere",function(req,res)
{
    res.send("<b>Hello</b> <span style='color :red'>world!</span>");
})

/*trimitirea mesaj dinamic*/
app.get("/data",function(req,res,next){
    res.write("data: ");
    next();
})

/*trimitirea mesaj dinamic*/
app.get("/data",function(req,res){
    res.write(""+ new Date());
    res.end();
})



/*trimitirea mesaj dinamic in fct de param(req.params;req.query) ,ce face si ordinea app.geturilor*/
app.get("/suma/:a/:b",function(req,res){
    var suma=parseInt(req.params.a)+parseInt(req.params.b);
    res.send(""+suma);

})

app.get("/*", function(req, res){
    console.log(req.url)
    res.render("pagini"+req.url, function(err, rezHtml){
        console.log(rezHtml);
        console.log("Eroare:"+err)
        res.send(rezHtml+"");
    });
})

app.listen(8080);
console.log("Serverul a pornit");