<script lang="ts">
	import { redirect } from '@sveltejs/kit';
	import { page } from '$app/stores';
    import type { PageData } from './$types';
	import { enhance } from '$app/forms';
    
    
    export let form;

    let name = '';
    let email = '';
    let message = '';

    export const snapshot = {
        capture: () => {
            return {
                name, email, message
            }
        },
        restore: (data) => {
            name = data.name;
            email  = data.email;
            message = data.message;
        }
    }

    const redirectTo = $page.url.searchParams.get('redirectTo') || '/';

    
</script>

<form method="post" class=" flex flex-col">
    
    <input type="text" name="username" placeholder="Name" bind:value={name} >

    <br>
    <input type="text" name="password" placeholder="Email" bind:value={email}>
    <br>

    <textarea name="message" id="message" cols="30" rows="10" bind:value={message}></textarea>
    <br>

    <button >Send</button> <a href="/">Cancel</a>
</form>