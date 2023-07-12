
## Vercel Actions Example for octomind-integration

This project is supposed to showcase the way to integrate [octomind](https://octomind.dev) into a vercel-deployed app.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
Deployment happens on [Vercel](https://vercel.com) with the native vercel-github integration.

The octomind tests use the [octomind execute action](https://github.com/OctoMind-dev/automagically-action-execute) and the [octomind github app](https://github.com/apps/octomind-dev)
to enable running tests on each preview branch. See the [.github/workflows/octomind.yml](.github/workflows/octomind.yml) file for the actions integration

