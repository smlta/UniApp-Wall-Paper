let SYSTEM_INFO = uni.getSystemInfoSync()
export const getStatusBarHeight = () => SYSTEM_INFO.statusBarHeight || 15 //微信状态栏高度

export const getTitleBarHeight = () => {
	if(uni.getMenuButtonBoundingClientRect)
	{
	let {top,height} = uni.getMenuButtonBoundingClientRect()
	return height + (top - getStatusBarHeight()) * 2
	} //如果是微信端有胶囊
	else
	{
		return 40
	}
} //获取微信胶囊信息对象,top(胶囊顶到页面顶的距离)和height(胶囊高度)

export const getNavBarHeight = () => getStatusBarHeight() + getTitleBarHeight()

export const getLeftIconLeft = () => {
	// #ifdef MP-TOUTIAO
    let {leftIcon:{left,width}} = tt.getCustomButtonBoundingClientRect()
	return left + parseInt(width)
	// #endif
    
	// #ifndef MP-TOUTIAO
	return 0
	// #endif	
}
