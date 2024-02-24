const mongoose = require("mongoose");
const mongoUrl = `mongodb+srv://alessandragdlima1:LZ3iDeoLb0kE7F4P@cluster0.p3ykhvo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

async function connect() {
  try {
    await mongoose.connect(mongoUrl);
    console.log("Connected to mongodb");
  } catch (e) {
    console.error("Error connecting to mongodb");
    console.error(e);
  }
}

connect();