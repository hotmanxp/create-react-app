const toQuery = (params) => Object.keys(params).reduce((acc,key, idx) => {
    return acc + (idx !== 0 ? '&&' : '') + `${key}=${params[key]}`
}, '?')

export default {
    fetch (url, method, params) {
        let isGet = method === 'get' || method === 'GET'
        let fetchUrl =  isGet? url + toQuery(params) : url
        let fetchParams = isGet ? null : JSON.stringify(params)

        return fetch(fetchUrl, {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            method: method === 'post' ? 'POST' : 'GET',
            body: fetchParams
        }
    ).then(res => res.json())
    }
}