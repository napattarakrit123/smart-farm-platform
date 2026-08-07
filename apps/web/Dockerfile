FROM node:22-alpine AS base
RUN corepack enable
WORKDIR /app
COPY . .
RUN pnpm install --frozen-lockfile=false && pnpm --filter @smart-farm/web build
EXPOSE 3000
CMD ["pnpm","--filter","@smart-farm/web","start"]
