import { convertTimestampToDate } from '$lib/server/ofx-utils.js'
import { json } from '@sveltejs/kit'

export async function POST({ request }) {
	const raw_json = await request.json()
	const raw_transactions = raw_json.OFX.BANKMSGSRSV1.STMTTRNRS.STMTRS.BANKTRANLIST.STMTTRN

	const transactionsByDate = {}

	raw_transactions.forEach((elem) => {
		const date = convertTimestampToDate(elem.DTPOSTED).toLocaleDateString()
		if (!transactionsByDate[date]) {
			transactionsByDate[date] = []
		}
		transactionsByDate[date].push(elem)
	})

	const dates = Object.keys(transactionsByDate)
	dates.map((elem) => {
		transactionsByDate[elem]
	})


	return json(transactionsByDate)
}
