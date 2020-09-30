const gioAccount = {
    dev:'aaa',
    prod:'bbb'
}
console.log('gioAccount',gioAccount,process.env.REACT_APP_ENV);
export default {
    gioAccount:gioAccount[process.env.REACT_APP_ENV]
}