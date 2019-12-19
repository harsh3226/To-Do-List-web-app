const express=require("express");
const app=express();
const bodyParser=require("body-parser");
//const date=require(__dirname+"/date.js");
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
var t=[];
//var dday="";
app.use(express.static("public"));
app .get("/",function(req,res)
{
  var today = new Date();
  var options={
    weekday : "long",
    day : "numeric",
    month :"long",
  };
  var day = today.toLocaleDateString("en-US",options);
    res.render("index",{ dday:day ,fr: t });
});

app.post("/",function(req,res)
{
  var rt=req.body.n1;
  t.push(rt);
  res.redirect("/");
  //console.log(t);
});
app.get("/work",function(req,res)
{
  res.render("index",{dday:"Work List", fr: t});
});

app.post("/work",function(req,res)
{
  var y=req.body.n1;
  t.push(y);
  res.redirect("/work");
})






app.listen(3000,function()
{

  console.log("srever has started");
});
