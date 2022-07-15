import request from '../utils/request'

const api = {
  // 获取工程总览图表数据接口
  getProjectOverview(data: object) {
    return request({
      url: '/projectOverview/getProjectOverview',
      method: 'POST',
      data,
    })
  },
}

export default api
