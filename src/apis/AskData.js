import * as urls from "../commons/urls"

/**
 * {ShopCartsServices}
 */
export class klData {
  /**
   * 通过用户编号来获取购物车信息
   * @param cb
   */
  static askKlData(cb){
    fetch(urls.kldata).then(response=>{
      response.json().then(data=>{
        cb(data)
      })
    })
  }

}
