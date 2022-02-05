import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  if (!(await knex.schema.hasTable("roles"))) {
    return await knex.schema.createTable("roles", (field) => {
      field.increments()
      field.string("name")
      field.timestamps(true, true)
    })
  }
}


export async function down(knex: Knex): Promise<void> {
}

