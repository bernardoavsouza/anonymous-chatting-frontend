FROM node:20.11.1

WORKDIR /app

COPY . .

RUN npm install -g pnpm@9.9.0

RUN pnpm install

EXPOSE 3000
CMD ["pnpm", "run", "dev"]