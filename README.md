# A/B Testing & Experimentation with Statsig, NextJS, and Vercel

This example shows how to do experimentation using Statsig, leveraging Edge Config and Edge Middleware. This example is an updated version of [Vercel's Statsig example](https://github.com/vercel/examples/tree/main/edge-middleware/ab-testing-statsig). It has been updated to use the NextJS 13 [App Router](https://nextjs.org/docs/app).

## Overview

The `ab-testing-statsig-app-router-template` is a simple and efficient way to get started with A/B testing on the Edge with Vercel and NextJS. It is developed and maintained by [Ampry](https://github.com/orgs/ampry) and [9d8](https://github.com/orgs/9d8dev). Built by [Cameron Youngblood](https://github.com/youngbloodcyb) and [Bridger Tower](https://github.com/brijr).

## Demo

Coming soon...

## How to Use

You can choose from one of the following two methods to use this repository:

One-Click Deploy
Deploy the example using Vercel:

Deploy with Vercel

Clone and Deploy
Execute `create-next-app` with [npm](https://docs.npmjs.com/cli/v9/commands/npm-init) or [Yarn](https://classic.yarnpkg.com/en/docs/cli/create/) to bootstrap the example:

npx create-next-app --example https://github.com/vercel/examples/tree/main/edge-middleware/ab-testing-statsig

### or

yarn create next-app --example https://github.com/vercel/examples/tree/main/edge-middleware/ab-testing-statsig
Set up environment variables
Log in to the Statsig console and navigate to Settings -> API KEYS. Then, copy .env.example to .env.local and fill it in with your Client, Server and Console API keys:

cp .env.example .env.local
Install the Statsig Vercel Integration for your project. Then fill in .env.local with the provided Edge Config Connection String and Edge Config Item Key.

Next, run Next.js in development mode:

npm install
npm run dev

### or

yarn
yarn dev
Deploy it to the cloud with Vercel (Documentation).

## Getting Started

To get started with the `twilio-next-template`:

1. Clone the repository to your local machine
2. Run the following commands:

   ```bash
   npm i
   ```

3. Add a `.env` file with your own API keys from Twilio. To find Twilio API keys, navigate to the [Twilio Console](https://twilio.com/console). You’ll be able to find your Account SID and Auth Token on the main dashboard of the console. Copy these values and paste them into your `.env` file as the values for TWILIO_SID and TWILIO_AUTH_TOKEN respectively. You will also need to create a "[verify service](https://www.twilio.com/console/verify/services)" in the Twilio console. Find the service ID of your Twilio service to paste into VERIFICATION_SID. Example names of the ` env` variables are located in the `.env.example` file in the root directory of this repository.
4. Next, run the following command:
   ```bash
   npm run dev
   ```
   Then open `http://localhost:3000` with your browser to see the result.

## Structure

The `twilio-next-template` application consists of the following primary directories:

- `app`: Contains the main application code including:
  - `api/twilio/route.js`: The API route for managing text code verification. Includes two route handlers for `GET` and `POST` requests.
  - `globals.css`: Contains the global CSS styles for the application.
  - `layout.js`: Contains the layout components for the application.
  - `page.js`: Contains the main page components for the application.
- `public`: Contains static files used across the application, such as SVG files for visual elements.

## Contributions

This project is open for contributions. We look forward to seeing your ideas and improvements.

## License

This project is licensed under the MIT License. See the LICENSE file in the repository root for more information.

## Contact

For more information, check out the creators at [9d8.dev](https://9d8.dev).
Made by 9d8, a development studio by [Cameron Youngblood](https://github.com/youngbloodcyb) and [Bridger Tower](https://github.com/brijr).
