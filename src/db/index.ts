
import { ConvexHttpClient } from "convex/browser";

if(!process.env.CONVEX_URL) {
   throw new Error("CONVEX_URL is not defined");
}
const dbclient = new ConvexHttpClient(process.env.CONVEX_URL);

export { dbclient };