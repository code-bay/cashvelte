import { OFXParse } from '$lib/server/ofx-utils.js';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	const raw_ofx = await request.text();
	const parsed_ofx = OFXParse(raw_ofx);

	return json(parsed_ofx);
}
