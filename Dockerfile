FROM node:16-alpine AS base
WORKDIR /app
COPY ./package.json .

FROM base AS dependencies
RUN npm install --omit=dev
RUN cp -R node_modules prod_node_modules
RUN npm install

FROM base as build
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS dev
COPY --from=dependencies /app/node_modules /app/node_modules
COPY --from=build /app/pages /app/pages
COPY --from=build /app/public /app/public
COPY --from=build /app/.next /app/.next

FROM base as prod
COPY --from=dependencies /app/prod_node_modules /app/node_modules
COPY --from=build /app/pages /app/pages
COPY --from=build /app/public /app/public
COPY --from=build /app/.next /app/.next
