# ERP School

Monorepository for an admin panel, a client app and a landing.

### Docs, keys, envs

Always update notion.
https://www.notion.so/pw-tech/Frontend-7fb6ba492ab247dea11fd40ac5565ae2

### Architecture

https://feature-sliced.design/ru/docs/get-started/overview

# Deploy flow

commit template: "feat: ES-27 add i18n"

```bash
yarn commit
```

branch template: "feature/init-project"

```bash
git push ...
```

### Branches

We use git flow.
https://danielkummer.github.io/git-flow-cheatsheet/index.ru_RU.html

branch template: "feature/ES-27-init-project"

### Commits

We use commits conventional
https://www.conventionalcommits.org/en/v1.0.0/

commit template: "feat: ES-27 add i18n"

```bash
yarn commit
```

### Team

- frontlead - anton.moldakov@gmail.com

### Apps and Packages

- `apps/admin`: Admin Panel app
- `apps/web`: Client app for guardian, student, teacher
- `packages/shared/ui`: a stub React component library shared by all applications
- `packages/config/eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `packages/config/tsconfig`: `tsconfig.json`s used throughout the monorepo

### Getting started

```
yarn install
```

### UI package (shared)

To develop ui kit package, move to shared package

```
 cd packages/shared
```

create .env file. variables are in the project [notion](https://www.notion.so/pw-tech/Frontend-7fb6ba492ab247dea11fd40ac5565ae2)

run the following command:

```
yarn storybook
```

### Deploy storybook

Deploy storybook with following command:

```
yarn deploy-storybook
```

don't forgot .env

## Useful Links

Learn more about the power of Turborepo:

- [Examples](https://github.com/vercel/turbo/tree/main/examples/basic)
- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
