var React = require("react");


class NetUtils extends React.Component {
    static DouB_Api = 'https://api.douban.com/v2/movie/top250?start=0&count=20';

    /**
     * post请求
     * url : 请求地址
     * data : 参数(Json对象)
     * callback : 回调函数
     * */
    static postJson (url, data, callback, errorcb) {
        var fetchOption = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        };

        fetch(url, fetchOption)
            .then((response) => response.text())
            .then((responseText) => {
                callback(responseText + ",黄彬")
                // callback(JSON.parse(responseText))
            }).catch((error) => {
                 console.log("postJson error: " + error)
            })
            .done();
    }

    /**
     * get请求
     * url : 请求地址
     * callback : 回调函数
     */
    static get(url, callback) {
        var fetchOptions = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };
        fetch(url, fetchOptions)
            .then((response) => response.text())
            .then((responseText) => {
                callback(JSON.parse(responseText));
            }).done();
        }
}







    /*
     *  get请求
     *  url:请求地址
     *  params:参数
     *  callback:回调函数
     * */
    const get1 = function (url,params,callback){
        if (params) {
            let paramsArray = [];
            //拼接参数
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            } else {
                url += '&' + paramsArray.join('&')
            }
        }
        //fetch请求
        fetch(url,{
            method: 'GET',
        })
            .then((response) => {
                callback(response)
            })
            .catch((error) => {
                alert(error)
            });
    }


    /*  第一种：'Content-Type': 'application/json'
     *  post请求
     *  url:请求地址
     *  params:参数,这里的参数格式是：{param1: 'value1',param2: 'value2'}
     *  callback:回调函数
     * */
    const postJSON = function(url,params,callback){
        //fetch请求
        fetch(url,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(params)
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                callback(responseJSON)
            })
            .catch((error) => {
                console.log("error = " + error)
            });
    }

    /*  第二种： form表单形式
     *  post请求
     *  url:请求地址
     *  params:参数,这里的参数要用这种格式：'key1=value1&key2=value2'
     *  callback:回调函数
     * */
    const postForm =function (url,params,callback){
        //fetch请求
        fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: params
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                callback(responseJSON)
            })
            .catch((error) => {
                console.log("error = " + error)
            });

}

module.exports = NetUtils;



//将JSON数据转换成字符串
//JSON.stringify(params)

//将数据JSON化
//JSON.parse(responseJSON)