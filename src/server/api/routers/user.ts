import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  // Get current user profile
  getProfile: protectedProcedure.query(async ({ ctx }) => {
    const { user, db } = ctx;

    // Try to find user in database
    let dbUser = await db.user.findUnique({
      where: { id: user.id },
    });

    // If user doesn't exist in database, create them
    dbUser ??= await db.user.create({
      data: {
        id: user.id,
        email: user.emailAddresses[0]?.emailAddress ?? "",
        firstName: user.firstName,
        lastName: user.lastName,
        imageUrl: user.imageUrl,
      },
    });

    return dbUser;
  }),

  // Update user profile
  updateProfile: protectedProcedure
    .input(
      z.object({
        firstName: z.string().optional(),
        lastName: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { user, db } = ctx;

      return db.user.upsert({
        where: { id: user.id },
        update: {
          firstName: input.firstName,
          lastName: input.lastName,
        },
        create: {
          id: user.id,
          email: user.emailAddresses[0]?.emailAddress ?? "",
          firstName: input.firstName,
          lastName: input.lastName,
          imageUrl: user.imageUrl,
        },
      });
    }),

  // Get user stats
  getStats: protectedProcedure.query(async ({ ctx }) => {
    const { user, db } = ctx;

    const postCount = await db.post.count({
      where: { authorId: user.id },
    });

    return {
      postCount,
      joinedAt: user.createdAt,
    };
  }),
});
