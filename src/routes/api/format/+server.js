import { convertTimestampToDate } from '$lib/server/ofx-utils.js';

export async function GET() {
	const date = convertTimestampToDate('20221102000000[-3:EST]'); // ofx

	return new Response(date);
}
