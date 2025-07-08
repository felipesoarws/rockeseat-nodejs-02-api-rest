import fastify from "fastify";
import { transactionsRoutes } from "./routes/transactions"; // plugin - separação de rotas e mais
import cookie from "@fastify/cookie";

export const app = fastify();

app.register(cookie);

app.register(transactionsRoutes, {
  prefix: "transactions",
});
