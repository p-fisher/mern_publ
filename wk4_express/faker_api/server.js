const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;


const userObject = () => ({
    _id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password(),
});

const companyObject = () => ({
    _id: faker.datatype.uuid(),
    name: faker.company.companyname(),
    address: {
        street: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
    },
});

// app.get("/api/healthcheck", (req,res) => {
// // res.send("here's some stuffs");
// res.json({message: "Here's some stuffs"});
// });

app.get("/api/user/create", (req,res) => {
    const createUser=generateUser();
    res.json(createUser);
})

app.get("/api/company/create", (req,res) => {
    const createCompany=generateCompany();
    res.json(createCompany);
})

app.get("/api/user/company", (req,res) => {
    const createUser=generateUser();
    const createCompany=generateCompany();
    const newUserComp = {
        user: createUser,
        company: createCompany,
    };
    res.json(createCompany);
})

app.listen(port,() => console.log(`express server at port ${port}`));