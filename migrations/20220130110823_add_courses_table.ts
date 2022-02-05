import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  if (!(await knex.schema.hasTable("courses"))) {
    return await knex.schema.createTable("courses", (field) => {
      field.increments()
      field.string("author")
      field.string("name")
      field.decimal("price")
      field.decimal("discount")
      field.string("thumbnail")
      field.timestamps(true, true)
    })
  }
}


export async function down(knex: Knex): Promise<void> {
}