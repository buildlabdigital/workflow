import { OpenAPIHono } from "@hono/zod-openapi";
// import { Hono } from "hono";
import { start } from "workflow/api";
import { handleUserSignup } from "../workflows/user-signup.js";

const app = new OpenAPIHono();

app.post("/api/signup", async (c) => {
  const { email } = await c.req.json();
  await start(handleUserSignup, [email]);
  return c.json({ message: "User signup workflow started" });
});

export default app;
