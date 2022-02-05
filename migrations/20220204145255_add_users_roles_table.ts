import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  if (!(await knex.schema.hasTable("users_roles"))) {
    return await knex.schema.createTable("users_roles", (field) => {
      field.increments();
      field.integer("user_id");
      field.integer("roles_id");
      field.timestamps(true, true);
    })
  }
}


export async function down(knex: Knex): Promise<void> {
}

