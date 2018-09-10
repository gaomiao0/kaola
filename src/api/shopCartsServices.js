import * as urls from "../commons/urls"

export  class  shopCartsServices {
  /**
   * 通过用户编号来获取购物车信息
   * @param cb
   */
  static getCartsInfoByUesrId(cb){
    fetch(urls.SHOPCARTSAPI).then(response=>{
      response.json().then(data=>{
        cb(data)
      })
    })
  }
}
