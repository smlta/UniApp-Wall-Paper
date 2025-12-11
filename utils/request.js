//封装公用请求方法
export const request = (config={}) => {
	const BASE_URL = 'https://tea.qingnian8.com/api/bizhi' //基地址
	let {url,header= {},method="GET",data={}} = config //解构配置对象,header默认为空对象,方法默认为GET
	header['access-Key'] = 'Scpsmlt'
	return new Promise((resolve,reject) => {
		uni.request({
			url:BASE_URL + url,
			method,
			header,
			data,
			success:res => {
				if(res.data.errCode === 0)
				{
					resolve(res) //将返回的promise状态改为fulfilled并暴露结果
				} //如果接口调用成功
				else if(res.data.errCode === 400) {
					uni.showModal({
						title:"错误提示",
						content:res.data.errMsg,
						showCancel:false
					})
					// 接口调用失败
				}
				else {
					uni.showToast({
						title:res.data.errMsg,
						icon:"none"
					})
					reject(res.data) //将返回的promise状态改为reject
				}
			},
			fail:err => {
				reject(err) //将promise状态改为reject
			}
		})
	})
}

/*该方法的作用
调用会向新建一个promise对象,然后在该promise对象内部发起异步请求,
当请求成功时将promise对象的状态改为fulfilled并储存响应结果,当请求失败时,
将promise对象的状态改为rejected储存响应,最后再返回这个promise对象
*/