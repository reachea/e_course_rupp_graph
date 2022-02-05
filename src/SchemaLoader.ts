import * as fs from "fs";
import { gql } from "apollo-server";

export const SchemaLoader = () => {
  const files = fs.readdirSync(__dirname + '/schemas')
  const schema = []
  for (const file of files) {
    schema.push(gql`${fs.readFileSync(__dirname + '/schemas/' + file)}`)
  }

  return schema
}