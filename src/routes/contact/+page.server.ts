import { env } from '$env/dynamic/private';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

const CONTACT_WEBHOOK_URL =
	env.CONTACT_WEBHOOK_URL ??
	'https://script.google.com/macros/s/AKfycbyWsx8vk8AdMKA4w-wROudSmQdvO8xZvzaMpXIYI7Vsil0tgkUocjCmpu7jTOJe_Kct3Q/exec';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const payload = new URLSearchParams();

		for (const field of ['firstName', 'lastName', 'email', 'company', 'interest', 'message']) {
			payload.set(field, String(formData.get(field) ?? '').trim());
		}

		if (!payload.get('firstName') || !payload.get('lastName') || !payload.get('email')) {
			return fail(400, { message: 'Please complete the required fields.' });
		}

		const response = await fetch(CONTACT_WEBHOOK_URL, {
			method: 'POST',
			headers: {
				'content-type': 'application/x-www-form-urlencoded'
			},
			body: payload
		});

		if (!response.ok) {
			return fail(502, { message: 'Something went wrong. Please try again.' });
		}

		return { success: true, message: 'form successfully submitted.' };
	}
};
