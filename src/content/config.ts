import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		published: z.date(),
		updated: z.date().optional(),
		draft: z.boolean().optional().default(false),
		description: z.string().optional().default(""),
		image: z.string().optional().default(""),
		tags: z.array(z.string()).optional().default([]),
		category: z.string().optional().nullable().default(""),
		lang: z.string().optional().default(""),

		/* For internal use */
		prevTitle: z.string().default(""),
		prevSlug: z.string().default(""),
		nextTitle: z.string().default(""),
		nextSlug: z.string().default(""),
	}),
});
const specCollection = defineCollection({
	schema: z.object({}),
});
const reviewsCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		category: z.enum(["book", "movie", "game"]),
		star: z.number().min(0).max(5),
		// 模仿 Fuwari 的写法，让 tags/keys 变成可选的空数组，防止没填时报错
		keys: z.array(z.string()).optional().default([]),
		cover: z.string(),
		date: z.date(),
	}),
});
export const collections: Record<
	string,
	ReturnType<typeof defineCollection>
> = {
	posts: postsCollection,
	spec: specCollection,
	reviews: reviewsCollection,
};
