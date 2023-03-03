import { XMLParser } from 'fast-xml-parser';

export function OFXDate(date) {
	let year = date.substring(0, 4),
			month = date.substring(4, 6) - 1,
			day = date.substring(6, 8),
			hour = date.substring(8, 10),
			min = date.substring(10, 12),
			sec = date.substring(12, 14)
	return `${year}-${month}-${day} ${hour}:${min}:${sec}`
}

export function OFXFilter(data) {
	let transactions = data.OFX.BANKMSGSRSV1.STMTTRNRS.STMTRS.BANKTRANLIST.STMTTRN.map((prop) => {
		return {
			'value': prop.TRNAMT,
			'date': OFXDate(prop.DTPOSTED),
			'memo': prop.MEMO
		}
	})

	// Código da loucura
	//
	var res = Object.values(transactions.reduce((acc, txn) => {
		let {date, ...txnRest} = txn
		acc[txn.date] = {
			date: acc[txn.date]?.date ?? txn.date,
			cash: {
				in: txn.value > 0 ? (acc[txn.date]?.cash.in || 0) + txn.value : (acc[txn.date]?.cash.in || 0),
				out: txn.value < 0 ? (acc[txn.date]?.cash.out || 0) + txn.value : (acc[txn.date]?.cash.out || 0),
				net: (acc[txn.date]?.cash.net || 0) + txn.value,
				txns: [...(acc[txn.date]?.cash.txns || []), txnRest]
			}
		}

		return acc;
	}, {}))

	res = res.slice().sort((a, b) => a.date.localeCompare(b.date))
	console.log(res, 'A')

	res = res.slice().sort((a, b) => b.date.localeCompare(a.date))
	console.log(res, 'D')

	// var newRes = res.date.sort()
	// console.log(newRes, 'sorted')
	// var resRev = res.date.reverse()
	// console.log(resRev, 'reverse')

	// var arrdate = []
	
	// for (let [index, i] of res.entries()) {
	// 	console.log(index)
	// 	arrdate.push(i.date) 
	// }
	// arrdate.sort()
	// console.log(arrdate, 'antes')
	// arrdate.reverse()
	// console.log(arrdate, 'depois')


	// var A = res.sort((a, b) => Date.parse(a.date) - Date.parse(b.date))
	// console.log(A, 'A')

	// var D = A.reverse((a, b) => Date.parse(a.date) - Date.parse(b.date))
	// console.log(D, 'D')


	return res
}


export function OFXParse(ofx) {
	let data = `<OFX>${ofx.split('<OFX>', 2)[1]}` // gets OFX body

	try {
		return new XMLParser().parse(data, {object: true});
	} catch (error) {
		data = data
			.replace(/<\/CODE>/g, "")
			.replace(/<\/SEVERITY>/g, "")
			.replace(/>\s+</g, '><')
			.replace(/\s+</g, '<')
			.replace(/>\s+/g, '>')
			.replace(/<([A-Z0-9_]*)+\.+([A-Z0-9_]*)>([^<]+)/g, '<\$1\$2>\$3')
			.replace(/<(\w+?)>([^<]+)/g, '<\$1>\$2</\$1>')
			.replace(/&/g, '&amp;');
		return new XMLParser().parse(data, {object: true});
	}
}


// const res = transactions.reduce((acc, item) => {
// 	// acc[item.date] = {test: 1, tx: [...(acc[item.date] || []), item]}
// 	acc[item.date] = {
// 		test: (acc[item.date].test || 0) + index
// 	}
// 	return acc;
// }, {})
// console.log(res, '<--')

// data: {
// 	account: {
// 		id: "",
// 		bank: "",
// 		currency: data.OFX.BANKMSGSRSV1.STMTTRNRS.STMTRS.CURDEF
// 	},
// 	cash: {
// 		balance: data.OFX.BANKMSGSRSV1.STMTTRNRS.STMTRS.LEDGERBAL.BALAMT,
// 		in: transactions.reduce((total, prop) => {
// 			if (prop.value > 0)
// 				return total + prop.value;
// 			return total
// 		}, 0),
// 		out: transactions.reduce((total, prop) => {
// 			if (prop.value < 0)
// 				return total + prop.value;
// 			return total
// 		}, 0),
// 		net: transactions.reduce((total, prop) => {
// 			return total + prop.value;
// 		}, 0),
// 	},