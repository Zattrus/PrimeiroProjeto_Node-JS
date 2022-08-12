const express = require('express');
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());

const costomers = [];

app.post("/account", (request, response) => {
    const { cpf, name } = request.body

    const customerAlreadyExists = costomers.some(
        (costomers) => costomers.cpf === cpf
    )

    if (customerAlreadyExists) {
        return response.status(400).json({ error: "customer already exists!!!" });
    }

    costomers.push({
        cpf,
        name,
        id: uuidv4(),
        statement: []
    });

    return response.status(201).send();
});
app.listen(3333);