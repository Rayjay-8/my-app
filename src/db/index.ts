
import { ConvexHttpClient } from "convex/browser";

// if(!process.env.CONVEX_URL) {
//    throw new Error("CONVEX_URL is not defined");
// }

const dbclient = process.env.CONVEX_URL ? new ConvexHttpClient(process.env.CONVEX_URL) : null

export { dbclient };