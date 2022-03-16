import { Knex } from "knex";
const bcrypt = require('bcrypt')

export async function seed(knex: Knex): Promise<void> {
    const salt = bcrypt.genSaltSync(10)

    // Deletes ALL existing entries
    await knex("users").del();

    // Inserts seed entries
    await knex("users").insert([
        { 
            name: "teste",
            email: "teste@teste.com",
            user: "teste",
            passw: bcrypt.hashSync('12345678', salt),
            nick: "teste"
        }
    ]);
};
