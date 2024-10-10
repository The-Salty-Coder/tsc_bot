import "../env.declaration";

// https://docs.seyfert.dev/getting-started/declare-module
import { Client, ParseClient } from "seyfert";

const client = new Client();

client.start();

declare module "seyfert" {
    interface UsingClient extends ParseClient<Client<true>> { }
}
