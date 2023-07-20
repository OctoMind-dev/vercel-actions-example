
## Vercel Actions Example for octomind-integration

This project is supposed to showcase the way to integrate [octomind](https://octomind.dev) into a vercel-deployed app.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
Deployment happens on [Vercel](https://vercel.com) with the native vercel-github integration.

The octomind tests use the [octomind execute action](https://github.com/OctoMind-dev/automagically-action-execute) and the [octomind github app](https://github.com/apps/octomind-dev)
to enable running tests on each preview branch. See the [.github/workflows/octomind.yml](.github/workflows/octomind.yml) file for the actions integration or just copy it:

```yml
on:
  deployment_status

concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true

jobs:
  octomind:
    if: ${{ github.event.deployment_status.state }} == 'success'
    name: 🚀🐙 trigger octomind e2e tests 🚀🐙
    runs-on: ubuntu-latest
    steps:
      - uses: OctoMind-dev/automagically-action-execute@v2
        with:
          testTargetId: <yourTestTargetId>
          url: ${{ github.event.deployment_status.target_url }}
          token: ${{ secrets.AUTOMAGICALLY_TOKEN }}
```

See [🚀🐙 trigger octomind e2e tests 🚀🐙](https://github.com/OctoMind-dev/vercel-actions-example/actions/runs/5613582651/job/15209923666?pr=1) for a successful actions run after a vercel deployment.

Follow the setup workflow as described in our [docs](https://docs.octomind.dev/quickstart-vercel) to get the required data.

