// 计算总时间间隔
// "2022-11-12 23:20:56.912322"
export const getTotalGapDays = (startTime) => {
	return Math.floor((new Date().getTime() - new Date(startTime).getTime()) / (24 * 60 * 60 * 1000));
};

// 计算已过多少次纪念日
export const getRepeatTimes = (startTime) => {
	const now = new Date(); // 当前时间
	const thisYear = now.getFullYear(); // 今年的年数

	const anniversary = new Date(startTime); // 纪念日
	// 同步年数
	const thisYearAnniversary = new Date(thisYear, anniversary.getMonth(), anniversary.getDate());
	// 如果今年的纪念日已过
	if (thisYearAnniversary < now) {
		return thisYear - anniversary.getFullYear();
	} else {
		return thisYear - anniversary.getFullYear() - 1;
	}
};

// 计算距即将到来的一次纪念日还差多少天 (可能在今年可能在明年)
export const getDays2UpcomingAnniversary = (startTime) => {
	const now = new Date(); // 当前时间
	const thisYear = now.getFullYear(); // 今年的年数

	const anniversary = new Date(startTime); // 纪念日
	// 同步年数
	const thisYearAnniversary = new Date(thisYear, anniversary.getMonth(), anniversary.getDate());
	// 如果今年的纪念日已过, 则年数加 1
	if (thisYearAnniversary < now) {
		thisYearAnniversary.setFullYear(thisYear + 1);
	}
	return Math.ceil((thisYearAnniversary - now) / (24 * 60 * 60 * 1000));
};
