import Storage from '../../utils/Storage'
import { selectedLang, selectedWallet } from '../../utils/StorageTypes'
import { supportLangs, supportWallets } from '../../config'

// 用户选择>浏览器默认>项目默认 （浏览器默认不属于我们支持语言的时候才使用项目默认）
const userLang = Storage.get(selectedLang)
const browserLang = supportLangs.find(o => o.locale.includes(window.navigator.language))
const lang = userLang || browserLang || supportLangs[0]

export function getInitialState() {
    return {
        lang: lang,
        wallet: Storage.get(selectedWallet) || supportWallets[0],
        foo: 100,
    }
}

export default getInitialState()
