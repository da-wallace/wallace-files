import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: protectedProcedure
    .input(z.object({
      name: z.string().min(1),
      content: z.string().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      // Ensure user exists in database
      await ctx.db.user.upsert({
        where: { id: ctx.user.id },
        update: {},
        create: {
          id: ctx.user.id,
          email: ctx.user.emailAddresses[0]?.emailAddress ?? "",
          firstName: ctx.user.firstName,
          lastName: ctx.user.lastName,
          imageUrl: ctx.user.imageUrl,
        },
      });

      return ctx.db.post.create({
        data: {
          name: input.name,
          content: input.content,
          authorId: ctx.user.id,
        },
      });
    }),

  getLatest: publicProcedure.query(async ({ ctx }) => {
    const post = await ctx.db.post.findFirst({
      orderBy: { createdAt: "desc" },
      include: {
        author: {
          select: {
            firstName: true,
            lastName: true,
            email: true,
          },
        },
      },
    });

    return post ?? null;
  }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.post.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        author: {
          select: {
            firstName: true,
            lastName: true,
            email: true,
          },
        },
      },
    });
  }),

  getUserPosts: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db.post.findMany({
      where: { authorId: ctx.user.id },
      orderBy: { createdAt: "desc" },
    });
  }),
});
