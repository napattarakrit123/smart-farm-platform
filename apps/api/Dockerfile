FROM node:22-alpine
RUN corepack enable
WORKDIR /app
COPY . .
RUN pnpm install --frozen-lockfile=false && pnpm --filter @smart-farm/api build
EXPOSE 3001
CMD ["pnpm","--filter","@smart-farm/api","start"]
