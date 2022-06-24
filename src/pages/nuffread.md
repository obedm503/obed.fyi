---
layout: ../layouts/project.astro
title: nuffread.com
duration: Jan 2019 - Present
source: https://github.com/obedm503/nuffread
url: https://beta.nuffread.com/
description: |
  Peer-to-peer book marketplace built with Graphql, Next.js, Ionic, and Tailwindcss.
team:
  - Nain Miranda (Research & Marketing)
roles:
  - Design
  - Prototyping
  - Architecting
  - Deployment
stack:
  - Graphql
  - Express
  - PostgreSQL
  - Next.js
  - React
  - Ionic
  - Tailwindcss
  - Apollo
  - TypeScript
  - SCSS
  - Vercel
  - Heroku
---

# Overview

Textbook costs amount to a significant part of the cost of higher education.
College students on a tight budget often resort to buying used textbooks from
other students. There was a need for a marketplace purpose-built and dedicated
to facilitating exchage books. We created [nuffread.com](https://www.nuffread.com)
to solve this specific need.

<img src="/nuffread.png" alt="nuffread.com" />

# Architecture

[nuffread.com](https://www.nuffread.com) is an on-going project built as
multiple clients sharing a [Graphql](https://graphql.org/) API on top of a
PostgreSQL database all written in [TypeScript](https://www.typescriptlang.org/).

I built the legacy prototype with [Ionic React](https://ionicframework.com/)
as an client-side rendered SPA. We set the goal to have a prototype built before
Spring 2020. I used Ionic React because of out time-to-market requirement. The
legacy web client is built and deployed with [Netlify](https://netlify.com/).

<img src="/nuffread-2.png" alt="nuffread.com" />

I knew Ionic React would not be a good long-term solution. In Summer 2021 I began
the process of porting the web client over to a [Next.js](https://nextjs.org/)
server-side rendered application styled with [Tailwind CSS](https://tailwindcss.com/)
and deployed to [Vercel](https://vercel.com/). I also built a administrative
backend client with the same stack.

<div class="mermaid">
{`
graph TD
    Mixpanel(Mixpanel)
    API{Graphql API}
    API --> DB[(Heroku Postgres)]
    API -.-> Sendgrid(Twilo SendGrid)
    Admin[admin.nuffread.com] --> API
    Beta --> API
    Web --> API
    Mobile --> API
    Beta[beta.nuffread.com] -.-> Mixpanel
    Web[www.nuffread.com] -.-> Mixpanel
    Mobile[Mobile] -.-> Mixpanel
`}
</div>

The backend is composed of a Graphql API built with [Apollo Server](https://www.apollographql.com/)
with PostgreSQL as a datastore deployed to [Heroku](https://heroku.com/).
We use [SendGrid](https://sendgrid.com/) as our email and text message delivery
service. The API implements subscriptions needed for the instant messaging
feature. For now subscriptions rely on an in-memory Pub/Sub engine. As we grow,
we'll look at moving at either [RabbitMQ](https://www.rabbitmq.com/)
or [Google Cloud Pub/Sub](https://cloud.google.com/pubsub/) depending on our needs.
