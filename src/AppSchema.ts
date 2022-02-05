import { SchemaLoader } from "./SchemaLoader";
import AppResolvers from "./resolvers/AppResolvers";

export const typeDefs = SchemaLoader();

export const resolvers = [
  AppResolvers
]