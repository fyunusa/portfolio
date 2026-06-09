import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
	const posts = await getCollection('blog');
	const publicPosts = posts
		.filter((post) => !post.data.draft)
		.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

	return rss({
		title: 'Umar Farouk Yunusa',
		description: 'Senior Backend & AI Engineer building high-throughput fintech APIs and production AI pipelines.',
		site: context.site || 'https://fyunusa.github.io',
		items: publicPosts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.date,
			description: post.data.description,
			link: `/blog/${post.id}/`,
		})),
		customData: `<language>en-us</language>`,
	});
}
