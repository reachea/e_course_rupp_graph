import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { resolvers, typeDefs } from "./AppSchema";
import ContextType from "./lib/ContextType";
import { contextType } from "./settings";

export const servers = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }): Promise<ContextType> => {
    const context = contextType;
    const knex = context.knex.default;

    const { token } = req.query;
    let admin;

    if (token) {
      admin = await knex
        .table("logged_token")
        .where({ token })
        .innerJoin("users", "users.id", "logged_token.user_id")
        .select(
          "users.id",
          "users.username",
          "users.email",
          "users.fullname",
          "users.gender",
          "users.phone_number",
          "users.dob"
        ).first();
    }
    return {
      knex: {
        default: knex,
      },
      admin,
    };
  },
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
});
