import {servers} from "./createApolloServer";
import { config } from "dotenv";

config()

servers.listen(process.env.PORT).then((url) => {
  console.log("listening on port: " + url.port + '!')
})