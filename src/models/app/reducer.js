// code in models/foo/reducer.js
export async function setLang(langObj, moduleState, actionCtx) {
    await actionCtx.setState({ lang: langObj })
    return { langObj }
}
export async function setWallet(walletObj, moduleState, actionCtx) {
    await actionCtx.setState({ wallet: walletObj })
    return { walletObj }
}

// export async function changeNameAsync(name) {
//     await api.track(name)
//     return { name }
// }

// export async function changeNameCompose(name, moduleState, actionCtx) {
//     await actionCtx.setState({ loading: true })
//     await actionCtx.dispatch(changeNameAsync, name) //基于函数引用调用
//     return { loading: false }
// }
