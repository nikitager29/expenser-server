const express = require("express");
const app = express();
const cors = require("cors");


const questionRouter = require("./routes/questionRoutes");
const testRouter = require("./routes/TestRoutes");
const bodyParser = require("body-parser");
const Urls = require("./settings/staticUrls");

const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './data/quizzerdb.db'
});

const TestsController = require("./controller/ControllersFolder/TestController");
//const companiesRepository = require("./DAL/Reposetorys/CompanyRepo")(Sequelize, Sequelize);
//const sequelize = require("./data/database");

const Test  = require("./models/Tests")(sequelize, Sequelize.DataTypes);
const Company  = require("./models/Company")(sequelize, Sequelize.DataTypes);
const Tag  = require("./models/Tags")(sequelize, Sequelize.DataTypes);
const FieldOfStudy  = require("./models/FieldOfStudy")(sequelize, Sequelize.DataTypes);
//const container = require("./containerConfig");
const req = require("express/lib/request");
const res = require("express/lib/response");

app.use(cors());
app.use(bodyParser.json());
app.listen(Urls.serverPort, () =>
  console.log(
    `YahalomTests server is running at ${Urls.serverDomain}:${Urls.serverPort}`
  )
);

app.use("/Test", testRouter);
app.use("/Question", questionRouter);


app.post('/createTag', async (req, res) => {
  try {
    await Tag.create(req.body);
    res.send('tag created');
    
  } catch (error) {
      console.log(error);
  }
});

app.get('/GetAlltags', async (req, res) => {
  try {
   const all =  Tag.findAll();
    res.send('tags ' + all);
    
  } catch (error) {
      console.log(error);
  }
});

app.post('/createCompany', async (req, res) => {
  try {
    await Company.create(req.body);
    res.send('Company created');
    
  } catch (error) {
      console.log(error);
  }
});

app.get('/GetAllCompanies', async (req, res) => {
  try {
   const all =  Company.findAll();
    res.send('companys ' + all);
    
  } catch (error) {
      console.log(error);
  }
});
 
app.post('/createFieldOfStudy', async (req, res) => {
  try {
    await FieldOfStudy.create(req.body);
    res.send('field created');
    
  } catch (error) {
      console.log(error);
  }
});

app.get('/GetAllFieldOfStudyies', async (req, res) => {
  try {
   const all =  FieldOfStudy.findAll();
    res.send('fields ' + all);
    
  } catch (error) {
      console.log(error);
  }
});

