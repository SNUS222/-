# Quiz Platform (SaaS)

Полноценный монорепозиторий для платформы онлайн-тестирования и live-викторин (Kahoot-like, расширенная).

## Архитектура

```text
/frontend        -> Next.js 14, TailwindCSS, Framer Motion
/backend         -> NestJS, Prisma, Socket.io, Redis, BullMQ
/database        -> Prisma schema + seed
/infrastructure  -> Docker Compose, env templates
```

### Ключевые возможности
- Создание тестов с несколькими типами вопросов.
- Live-викторины по коду комнаты.
- Рейтинг в реальном времени.
- Турниры и образовательные комнаты (архитектурно подготовлено).
- JWT + refresh auth, bcrypt, rate limit, валидация.
- PostgreSQL + Prisma.
- Redis для кэша и очередей.

## Быстрый запуск

### 1) Инфраструктура
```bash
docker compose -f infrastructure/docker-compose.yml up -d
```

### 2) Backend
```bash
cd backend
cp .env.example .env
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run start:dev
```

### 3) Frontend
```bash
cd frontend
cp .env.example .env.local
npm install
npm run dev
```

Frontend: http://localhost:3000  
Backend: http://localhost:4000

## CI/CD
- GitHub Actions: lint + build frontend/backend + prisma validate.

## Масштабирование до 100k+
- Stateless API pods за LB.
- Redis adapter для горизонтального масштабирования WebSocket.
- BullMQ для тяжелых задач (импорт, отчеты, рассылки).
- Read replicas Postgres для аналитики.
- CDN для медиа и edge-cache для публичных тестов.

## Безопасность
- JWT access/refresh.
- bcrypt password hashing.
- глобальная валидация DTO.
- rate limiting.
- CORS/CSRF strategy (cookie + origin policy для production).

