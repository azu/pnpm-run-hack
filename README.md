# auto installation when `pnpm run` command is executed

Use `node-options=--import=./.pnpm-run.mjs` option allow to hook `pnpm run` scripts.

- [.npmrc | pnpm](https://pnpm.io/npmrc#node-options)

## Demo

```bash
git checkout old-deps
pnpm install

# back to the latest version
git checkout main
pnpm run dev
# if node_modules and pnpm-lock.yaml are different, 
# automatically install the dependencies which is defined in pnpm-lock.yaml
# and start the development server
```


https://github.com/azu/pnpm-run-hack/assets/19714/f1475991-eb9e-43e9-8462-f97c0c197f3f

