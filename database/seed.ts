import { PrismaClient, QuestionType } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: { email: 'admin@quiz.local' },
    update: {},
    create: {
      email: 'admin@quiz.local',
      passwordHash: 'seed_hash',
      displayName: 'Admin'
    }
  });

  await prisma.test.create({
    data: {
      ownerId: user.id,
      title: 'Demo Quiz',
      isPublic: true,
      questions: {
        create: [
          {
            type: QuestionType.SINGLE_CHOICE,
            prompt: 'Что используется для real-time?',
            order: 1,
            answers: {
              create: [
                { text: 'Socket.io', isCorrect: true },
                { text: 'CSV файл', isCorrect: false }
              ]
            }
          }
        ]
      }
    }
  });
}

main().finally(async () => prisma.$disconnect());
