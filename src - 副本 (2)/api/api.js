import {
  wxRequest
} from '@/utils/wxRequest';

const apiMall = 'https://www.jizhangyl.com/jizhangyl'
// const apiMall = 'http://jizhangyl.natapp1.cc/jizhangyl'

//获取令牌
const getToken = (params) => wxRequest(params, apiMall + '/user/loginByMini');
//根据code码获取用户详细信息
const getUserDetailInfo = (params) => wxRequest(params, apiMall + '/wechat/getOpenid');
//验证邀请码是否正确
const checkInviteCode = (params) => wxRequest(params, apiMall + '/user/checkInviteCode');
//分页查询商品
const findUpShop = (params) => wxRequest(params, apiMall + '/shop/findUp');
//根据ID获取商品详情
const getShopDetail = (params) => wxRequest(params, apiMall + '/shop/detail');
//addShopToCart
const addShopToCart = (params) => wxRequest(params, apiMall + '/cart/add');
//根据名称查询商品
const getShopByKeyword = (params) => wxRequest(params, apiMall + '/shop/findByName');
//获取所有收件人信息
const getReceiver = (params) => wxRequest(params, apiMall + '/addr/findAllByOpenid');
//智能解析地址
const getAutoInput = (params) => wxRequest(params, apiMall + '/address/resolve');
//删除地址收件人
const deleteAddress = (params) => wxRequest(params, apiMall + '/addr/delete');
//更新收件人地址
const updateAddress = (params) => wxRequest(params, apiMall + '/addr/update');
//保存收件人地址
const saveAddress = (params) => wxRequest(params, apiMall + '/addr/save');
//获取发件人地址
const getSender = (params) => wxRequest(params, apiMall + '/sender/findAllByOpenid');
//设置默认发件人
const setDefaultAddress = (params) => wxRequest(params, apiMall + '/sender/setDefault');
//删除发件人地址
const delSendAddress = (params) => wxRequest(params, apiMall + '/sender/delete');
//更新地址发件人
const updateSenderAddress = (params) => wxRequest(params, apiMall + '/sender/update');
//保存发件人信息
const saveSenderAddress = (params) => wxRequest(params, apiMall + '/sender/save');
//getSellAmount
const getSellAmount = (params) => wxRequest(params, apiMall + '/order/sellAmount');
//getCateList
const getCateList = (params) => wxRequest(params, apiMall + '/cate/list');
//getShopListByCate
const getShopListByCate = (params) => wxRequest(params, apiMall + '/shop/findByCateId');
//获取收件人地址
const getRecAddress = (params) => wxRequest(params, apiMall + '/addr/findAllByOpenid');
//收件人地址id得到相应的数据
const getAddressInfo = (params) => wxRequest(params, apiMall + '/addr/findById');
//获取发件人信息
const getSendAddress = (params) => wxRequest(params, apiMall + '/sender/findById');
//获取默认发件人地址
const getDefaultSend = (params) => wxRequest(params, apiMall + '/sender/getDefault');
//提交订单
const subOrder = (params) => wxRequest(params, apiMall + '/order/create');
//付款
const toPay = (params) => wxRequest(params, apiMall + '/pay/unifiedOrder');
//获取订单通过id
const getOrderBySelectId = (params) => wxRequest(params, apiMall + '/order/findByOrderStatus');
//取消订单
const CancelOrder = (params) => wxRequest(params, apiMall + '/order/cancel');
//getCartList
const getCartList = (params) => wxRequest(params, apiMall + '/cart/list');
// 增加商品
const addShop = (params) => wxRequest(params, apiMall + '/cart/increase');
//减少商品
const reduceShop = (params) => wxRequest(params, apiMall + '/cart/reduce');

export default {
  getToken,
  getUserDetailInfo,
  checkInviteCode,
  findUpShop,
  getShopDetail,
  getShopByKeyword,
  getReceiver,
  getAutoInput,
  deleteAddress,
  updateAddress,
  saveAddress,
  getSender,
  setDefaultAddress,
  delSendAddress,
  updateAddress,
  saveSenderAddress,
  getSellAmount,
  getCateList,
  getShopListByCate,
  addShopToCart,
  getRecAddress,
  getAddressInfo,
  getSendAddress,
  getDefaultSend,
  subOrder,
  toPay,
  getOrderBySelectId,
  CancelOrder,
  getCartList,
  addShop,
  reduceShop
}
