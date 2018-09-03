import wepy from 'wepy';
import tip from './tip'


const wxRequest = async(params = {}, url) => {
    tip.loading();
    let data = params.query || {};
    let token = wepy.getStorageSync('USER_API_TOKEN') || ''
    data.token = token
    let res = await wepy.request({
        url: url,
        method: params.method || 'GET',
        data: data,
        header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
    if (res.data.code == 500106) {
        wepy.redirectTo({
            url: 'pages/authorize'
        })
    }
    tip.loaded();
    return res;
};


module.exports = {
    wxRequest
}
