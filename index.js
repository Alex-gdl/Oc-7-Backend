const express = require("express"); 
const cors = require("cors");
require("dotenv").config();
require("./db/mongo");
const { userRouter } = require("./routers/users.router");
const { bookRouter } = require("./routers/books.router");
const mongoose = require("mongoose");



const app = express();

mongoose.connect('mongodb+srv://alessandragdlima1:LZ3iDeoLb0kE7F4P@cluster0.p3ykhvo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use(cors()); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(express.static("uploads"));


app.use("/api/auth", userRouter); 
app.use("/api/books", bookRouter);







const PORT = process.env.PORT || 4000; 



app.listen(PORT, function () { 
  console.log(`App listening on port ${PORT}!`);
});