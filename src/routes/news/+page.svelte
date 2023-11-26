<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;

    const { news } = data;
</script>

<h1>Today's headline</h1>

{#each news as headline }
    <h2>{headline.title}</h2>
{/each}