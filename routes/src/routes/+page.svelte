<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	$: ({ posts } = data);
</script>

<h1>Posts</h1>

<p>Showing {posts.length} posts</p>
<ul>
	{#each posts as post}
		<li><a href="/posts/{post.slug}">{post.title}</a></li>{/each}
</ul>
