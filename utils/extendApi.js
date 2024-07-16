export {toast}
export {modal}

const toast = ({title = '数据加载中...', icon = 'none', duration = 1200,mask = true} = {}) => {
  wx.showToast({
    title,
    icon,
    duration,
    mask
  })
}

const modal = (options = {})=> {

  return new Promise((resolve) => {

    const defaultOpt = {
      title: '提示',
      content: '您确定执行该操作吗？',
      confirmColor: '#f3514f'
    }

   const opts = Object.assign({},defaultOpt,options)

    wx.showModal({
      ...opts,
      complete({confirm,cancle}){
        confirm && resolve(true)
        cancle && resolve(false)
      }
    })
  })
}