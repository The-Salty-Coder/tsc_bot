import { Client } from "seyfert";
import type {ParseClient} from "seyfert";

const client = new Client();

// This will start the connection with the gateway and load commands, events, components and langs
client.start();

declare module 'seyfert' {
  interface UsingClient extends ParseClient<Client<true>> { }
}