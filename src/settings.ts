import { Knex, knex } from "knex";
const setting = require('../knexfile');
export const createKnexContext: { default: Knex } = {
  default: knex(setting.development)
}

export const contextType = {
  knex: createKnexContext
}