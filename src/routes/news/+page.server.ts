import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { PUBLIC_API_KEY } from '$env/dynamic/private'

export const load = (async ({ cookies, url }) => {

    if (!cookies.get('username')) {
        throw redirect(307, `/auth?redirectTo=${url.pathname}`)
    }

    const newsAPIKEY = 'YOUR_API_KEY';

    console.log(newsAPIKEY);

    const news = [
        {id: 1, title: 'News 1'},
        {id: 2, title: 'News 2'},
        {id: 3, title: 'News 3'},
    ]

    return { news };
}) satisfies PageServerLoad;