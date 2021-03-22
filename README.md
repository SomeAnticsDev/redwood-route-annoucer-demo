# Redwood Route Announcer Demo

```
git clone https://github.com/jtoar/redwood-route-annoucer-demo.git
cd redwood-tutorial
yarn install
yarn rw prisma migrate dev
yarn rw prisma db seed
yarn rw dev
```

Fallback branches:

- diy route announcer

```
git checkout diy-route-announcer
```

- canary

```
git checkout canary
```

## Prior Art

- David Luhr — https://github.com/redwoodjs/redwood/issues/540
- Gatsby
  - Marcy Sutton — https://www.gatsbyjs.com/blog/2019-07-11-user-testing-accessible-client-routing/
  - Madalyn Parker
    - blog post — https://www.gatsbyjs.com/blog/2020-02-10-accessible-client-side-routing-improvements/
    - PR https://github.com/gatsbyjs/gatsby/pull/26376
- Next.js (Kyle Boss) — https://github.com/vercel/next.js/pull/20428