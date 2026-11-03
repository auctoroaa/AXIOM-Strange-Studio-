FROM node:22-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY apps/telegram-bot/package.json ./package.json
RUN npm install --omit=dev --no-audit --no-fund
COPY apps/telegram-bot/src ./src
USER node
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 CMD node -e "fetch('http://127.0.0.1:8080/readyz').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"
CMD ["node", "src/index.js"]
