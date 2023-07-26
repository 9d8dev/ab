# A/B Testing & Experimentation with Statsig, NextJS, and Vercel

<img width="1504" alt="Screenshot 2023-07-26 at 9 15 58 AM" src="https://github.com/9d8dev/ab-testing-statsig-app-router-template/assets/95453018/947c9d8f-cead-4cc8-8596-75d8cde487fc">

This example shows how to do experimentation using Statsig, leveraging Edge Config and Edge Middleware. This example is an updated version of [Vercel's Statsig example](https://github.com/vercel/examples/tree/main/edge-middleware/ab-testing-statsig). It has been updated to use the NextJS 13 [App Router](https://nextjs.org/docs/app).

## Overview

The `ab-testing-statsig-app-router-template` is a simple and efficient way to get started with A/B testing on the Edge with Vercel and NextJS. It is developed and maintained by [Ampry](https://github.com/orgs/ampry) and [9d8](https://github.com/orgs/9d8dev). Built by [Cameron Youngblood](https://github.com/youngbloodcyb) and [Bridger Tower](https://github.com/brijr).

## Demo

[statsig-ab-testing.vercel.app](https://statsig-ab-testing.vercel.app/)

Click the `Reset Cookie` button to refresh the cookie and re-bucket you into a new experiment group.

## How to Use

You can choose from one of the following two methods to use this repository:

**One-Click Deploy using Vercel:**

Put the one click deploy with vercel right here...

### or

**Clone this Repository**

```bash
git clone https://github.com/9d8dev/ab-testing-statsig-app-router-template.git

cd ab-testing-statsig-app-router-template

npm install

npm run dev
```

### Setting up environment variables

Login to the [Statsig console](https://console.statsig.com/) and enable the pro plan to access experimentation features.

Navigate to `Settings` -> `Keys and Environments`. Add all three API keys (client, server, and console) to your `env` file respectively.

Install the [Statsig Vercel Integration](https://vercel.com/integrations/statsig) for your project. It will give you the Edge Config Connection String and Edge Config Item Key. Place these in your `env` file respectively.

## Creating an Experiment

To create an experiment, sign in to Statsig and navigate to `Experiments` in the sidebar menu. Create a new experiment and name it whatever you like. Enter additional optional information. At the end of the form, select `User ID` for the ID Type.

Within your NextJS project, open `/lib/constants.ts`. Copy the experiment name from Statsig and paste it as the value for the `EXPERIMENT` constant.

![example](https://github.com/9d8dev/ab-testing-statsig-app-router-template/assets/95453018/cacf446e-af47-419c-8024-79dfa797d301)

EXAMPLE:

```
export const EXPERIMENT = nextjs_test;
```

Add a parameter to your experiment called `bucket`.
Name your buckets. In this case, make sure that your `control` bucket is left blank. It doesn't matter what your name your variation, this page will be statically generated at build time. _See image below for example._

<img width="1490" alt="Screenshot 2023-07-26 at 9 12 24 AM" src="https://github.com/9d8dev/ab-testing-statsig-app-router-template/assets/95453018/86c401be-17c9-4c66-ac16-af59a9f48783">

When you have completed your configuration, you can start the experiment.

## Making Changes to Variations

In this example, the `app/[bucket]/page.js` file is the variation page whereas the root `app/page.js` file is the control page. In other words, the root page is your original page while the bucket page contains the changes you want to test. With the configuration in this project, traffic will be split between these two pages. Make any changes to your page in the `app/[bucket]/page.js` file.

## Statsig Events and Metrics

While this example does not yet support metrics, [Statsig has a client-side React library](https://docs.statsig.com/client/reactSDK) for easily managing metrics and custom events. This allows you to send custom client events from pages that are wrapped in the Statsig provider.

## Middleware

This example utilizes middleware to direct traffic to the proper variation. See `middleware.ts` for more details.

## Contributions

This project is open for contributions. We look forward to seeing your ideas and improvements.

## License

This project is licensed under the MIT License. See the LICENSE file in the repository root for more information.

## Contact

For more information, check out the creators at [Cameron Youngblood](https://github.com/youngbloodcyb) and [Bridger Tower](https://github.com/brijr).
Made by [9d8](https://9d8.dev) and [Ampry](https://ampry.com).
