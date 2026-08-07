FROM node:22-alpine
RUN corepack enable
WORKDIR /app
COPY . .
RUN pnpm install --frozen-lockfile=false && pnpm --filter @smart-farm/worker build
CMD ["pnpm","--filter","@smart-farm/worker","start"]
