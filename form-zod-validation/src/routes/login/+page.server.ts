import { fail, type Actions, redirect } from '@sveltejs/kit';
import { zfd } from 'zod-form-data';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const loginSchem = zfd.formData({ user: zfd.text(), password: zfd.text() });

		const result = loginSchem.safeParse(formData);

		if (!result.success) {
			const data = {
				data: Object.fromEntries(formData),
				errors: result.error.flatten().fieldErrors
			};
			return fail(400, data);
		}

		throw redirect(303, '/');
	}
};
