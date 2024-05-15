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
