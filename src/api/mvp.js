import * as urls from "../commons/urls"

export  class  indexServices {

  /**
   * 通过用户编号来获取购物车信息
   * @param cb
   */
  static indexInfoByUserId(cb){
    fetch(urls.SHOPCARTSAPI2).then(response=>{
      response.json().then(data=>{
        cb(data)
      })
    })
  }
}
