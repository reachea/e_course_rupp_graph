import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  if (!(await knex.schema.hasTable("logged_token"))) {
    return await knex.schema.createTable("logged_token", (field) => {
      field.increments();
      field.integer("user_id");
      field.string("token");
      field.timestamps(true, true)
    })
  }
}


export async function down(knex: Knex): Promise<void> {
}

