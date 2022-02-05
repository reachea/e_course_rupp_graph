import '@babel/polyfill';
import {servers} from "./createApolloServer";
import { config } from "dotenv";

config()

servers.listen(process.env.PORT || 4000).then((url) => {
  console.log("listening on port: " + url.port + '!')
})