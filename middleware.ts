// import { NextRequest, NextResponse, NextFetchEvent } from "next/server";
// import Statsig from "statsig-node";
// import { EdgeConfigDataAdapter } from "statsig-node-vercel";
// import { EXPERIMENT, UID_COOKIE, GROUP_PARAM_FALLBACK } from "@/lib/constants";

// // We'll use this to validate a random UUID
// const IS_UUID = /^[0-9a-f-]+$/i;
// const dataAdapter = new EdgeConfigDataAdapter(
//   process.env.EDGE_CONFIG_ITEM_KEY!
// );

// // configure what routes to run the middleware on
// export const config = {
//   matcher: "/",
// };

// export async function middleware(req: NextRequest, event: NextFetchEvent) {
//   // Get the user ID from the cookie or get a new one
//   let userId = req.cookies.get(UID_COOKIE)?.value;
//   let hasUserId = !!userId;

//   // If there's no active user ID in cookies or its value is invalid, get a new one
//   if (!userId || !IS_UUID.test(userId)) {
//     userId = crypto.randomUUID();
//     hasUserId = false;
//   }

//   // pass data adapter in for edge compatibility
//   await Statsig.initialize(process.env.STATSIG_SERVER_API_KEY!, {
//     dataAdapter,
//   });

//   // get experiment that user is in
//   const experiment = await Statsig.getExperiment(
//     { userID: userId },
//     EXPERIMENT
//   );

//   const bucket = experiment.get<string>("bucket", GROUP_PARAM_FALLBACK);

//   // Clone the URL and change its pathname to point to a bucket
//   const url = req.nextUrl.clone();
//   url.pathname = `/${bucket}`;
//   console.log(url.pathname);

//   // Response that'll rewrite to the selected bucket
//   const res = NextResponse.rewrite(url);
//   console.log("response url: ", typeof res);

//   // Add the user ID to the response cookies if it's not there or if its value was invalid
//   if (!hasUserId) {
//     res.cookies.set(UID_COOKIE, userId, {
//       maxAge: 60 * 60 * 24, // identify users for 24 hours
//     });
//   }

//   // Flush exposure logs to Statsig
//   event.waitUntil(Statsig.flush());

//   return res;
// }

// configure what routes to run the middleware on
export const config = {
  matcher: "/",
};

export default function middleware({});
