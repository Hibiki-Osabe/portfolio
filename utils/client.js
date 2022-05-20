import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "wstzjtil96",
  apiKey: process.env.API_KEY || "",
});
