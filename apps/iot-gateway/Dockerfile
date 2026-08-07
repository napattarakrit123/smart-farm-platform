FROM node:22-alpine
RUN corepack enable
WORKDIR /app
COPY . .
RUN pnpm install --frozen-lockfile=false && pnpm --filter @smart-farm/iot-gateway build
CMD ["pnpm","--filter","@smart-farm/iot-gateway","start"]
