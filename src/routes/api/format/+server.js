import { convertTimestampToDate } from '$lib/server/ofx-utils.js'
import { json } from '@sveltejs/kit'
import { element } from 'svelte/internal'

export async function POST({ request }) {
	const raw_json = await request.json()
	const raw_transactions = raw_json.OFX.BANKMSGSRSV1.STMTTRNRS.STMTRS.BANKTRANLIST.STMTTRN
	const language = raw_json.OFX.SIGNONMSGSRSV1.SONRS.LANGUAGE
	const organization = raw_json.OFX.SIGNONMSGSRSV1.SONRS.FI.ORG
	const bank_id = raw_json.OFX.BANKMSGSRSV1.STMTTRNRS.STMTRS.BANKACCTFROM.BANKID
	const currency = raw_json.OFX.BANKMSGSRSV1.STMTTRNRS.STMTRS.CURDEF
	const account_type = raw_json.OFX.BANKMSGSRSV1.STMTTRNRS.STMTRS.BANKACCTFROM.ACCTTYPE
	const period = [
		convertTimestampToDate(raw_json.OFX.BANKMSGSRSV1.STMTTRNRS.STMTRS.BANKTRANLIST.DTSTART), 
		convertTimestampToDate(raw_json.OFX.BANKMSGSRSV1.STMTTRNRS.STMTRS.BANKTRANLIST.DTEND)
	]

	raw_transactions.forEach((elem) => {
		elem.DTPOSTED = convertTimestampToDate(elem.DTPOSTED)
	})

	const transactionsByDate = {}

	raw_transactions.forEach((elem) => {
		const date = elem.DTPOSTED.toLocaleDateString()
		if (!transactionsByDate[date]) {
			transactionsByDate[date] = []
		}
		transactionsByDate[date].push(elem)
	})

	const dates = Object.keys(transactionsByDate)
	dates.map((elem) => {
		transactionsByDate[elem]
	})

	const response = {
		language: language,
		organization: organization,
		bank_id: bank_id,
		currency: currency,
		period: period,
		account_type: account_type,
		transactions: transactionsByDate,
	}


	return json(response)
}
