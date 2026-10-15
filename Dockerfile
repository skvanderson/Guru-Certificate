FROM node:22-bookworm-slim AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY public ./public
COPY src ./src
RUN npm run build

FROM node:22-bookworm-slim
WORKDIR /app
COPY --from=build /app/build ./build
COPY server/index.cjs ./server/index.cjs
RUN mkdir /data && chown node:node /data
USER node
ENV PORT=3001 DATABASE_PATH=/data/guru.sqlite
EXPOSE 3001
CMD ["node", "server/index.cjs"]
