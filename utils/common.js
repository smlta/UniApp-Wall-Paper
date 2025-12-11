//该方法用来格式化接口获取的时间戳
export function compareTimestamp(time) {
	const currentTime = new Date().getTime() //获取当前时间戳
	const timeDiff = currentTime - time //获取时间戳的差值
	if(timeDiff < 60000)
	{
		return '一分钟内'
	}
	else if(timeDiff < 3600000)
	{
		return Math.floor(timeDiff / 60000) + '分钟'
	}
	else if(timeDiff < 86400000)
	{
		return Math.floor(timeDiff / 3600000) + '小时'
	}
	else if(timeDiff < 2592000000)
	{
		return Math.floor(timeDiff / 86400000) + '天'
	}
	else if (timeDiff < 7776000000)
	{
		return Math.floor(timeDiff / 2592000000) + '月'
	}
	else
	{
		return null
	}
}