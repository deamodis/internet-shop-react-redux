import phones from './mockPhones'

export const fetchPhones = async () => {
    return new Promise( resolve => {
        console.log('rabotaet')
        resolve(phones)
    })
};


export const loadMorePhones = async () => {
    return new Promise( resolve => {
        console.log('eto')
        resolve(phones)
    })
};