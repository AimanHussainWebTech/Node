let exp = require("express");
let ro = require("./Route/Router");
const db = require("./Connection");
let user = require("./Collections/UserModel");
let user2 = require("./Collections/PersonalRecord");
let user3 = require("./Collections/Healthinfo");

require("dotenv").config();
// add data in model
let add_data = async function () {
  try {
    user.create({
      u_name: "Aiman Hussain",
      u_email: "aiman.hussain@outlook.com",
      u_password: "123456",
      u_address: "Karachi",
      u_gender: "Female",
      u_age: "21",
    });
    console.log("User Created Successfully");
  } catch (error) {
    console.log(error);
  }
};
let add_person = async function () {
  try {
    user2.create({
      height: 5.4,
      weight: 55,
      BMI: 123,
      category: "null",
    });
    console.log("Person Created Successfully");
  } catch (error) {
    console.log(error);
  }
};
let add_Health = async function () {
  try {
    user3.create({
      BP: 12.3,
      Heart_rate: 33,
      Sugar: 98,
      colestrol: 55,
    });
    console.log("Person Created Successfully");
  } catch (error) {
    console.log(error);
  }
};

let myapp = exp();
myapp.use("/aiman/", ro);
db()
  .then(() => {
    add_data();
    add_person();
    add_Health();
    myapp.listen(process.env.PORT, () => {
      console.log(`server is started at http://localhost:${process.env.PORT} `);
    });
  })
  .catch((e) => {
    console.log(e);
  });
