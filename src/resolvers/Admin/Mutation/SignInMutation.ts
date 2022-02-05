import knex from "knex"
import ContextType from "../../../lib/ContextType"
const bcrypt = require('bcrypt')
const crypto = require('crypto')
import { AuthenticationError } from "apollo-server-express";

export const SignInMutation = async (_, { input }, ctx: ContextType) => {
  const knex = await ctx.knex.default;

  const user = await knex.table("users").where({
    username: input.username
  }).first();

  if (await bcrypt.compareSync(input.password, user.password)) {
    const randomToken = crypto.randomBytes(64).toString("hex");

    await knex.table("logged_token").insert({
      user_id: user.id,
      token: randomToken
    })

    return randomToken;
  }

  return new AuthenticationError("Password or Username not found!");
}