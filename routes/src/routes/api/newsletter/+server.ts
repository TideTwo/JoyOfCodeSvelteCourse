import type { RequestHandler } from './$types';

export const GET: RequestHandler = async (e) => {
	const options: ResponseInit = {
		status: 418,
		headers: { X: 's' }
	};
	return new Response('Hello', options);
};

export const POST: RequestHandler = async (e) => {
	const data = await e.request.formData();
	const email = data.get('email');
	console.log(email);

	return new Response(JSON.stringify({ success: true }), {
		status: 200,
		headers: { 'Content-Type': 'application/json' }
	});
};
