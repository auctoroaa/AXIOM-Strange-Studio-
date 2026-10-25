import { createApi } from "./server";

const port = Number(process.env.PORT ?? 8787);
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error("PORT must be an integer between 1 and 65535");
}

createApi().listen(port, "0.0.0.0", () => {
  process.stdout.write(`OIOS API listening on ${port}\n`);
});
