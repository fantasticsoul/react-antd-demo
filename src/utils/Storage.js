class Storage {
    constructor(namespace = 'flygo', devider = '-->') {
        this.prefix = namespace + devider
        this.source = window.localStorage
        this.initRun()
    }
    getFullKey(key) {
        return this.prefix + key
    }
    initRun() {
        const data = this.source
        if (!data.length) {
            return
        }
        const reg = /__expires__/
        Object.keys(data).map((key, v) => {
            if (!reg.test(key)) {
                const now = Date.now()
                const expires = data[`${key}__expires__`] || Date.now + 1
                if (now >= expires) {
                    this.remove(key)
                }
            }
            return key
        })
    }

    /*
     * set 存储方法
     * @ param {String}     key 键
     * @ param {String}     value 值，
     * @ param {String}     expired 过期时间，以秒为单位，非必须
     */
    set(key, value, expired) {
        const source = this.source
        const fullKey = this.getFullKey(key)
        source[fullKey] = JSON.stringify(value)
        if (expired) {
            source[`${fullKey}__expires__`] = Date.now() + expired * 1000
        }
        return value
    }

    /*
     * get 获取方法
     * @ param {String}     key 键
     * @ param {String}     expired 存储时为非必须字段，所以有可能取不到，默认为 Date.now+1
     */
    get(key) {
        const source = this.source
        const fullKey = this.getFullKey(key)
        const expired = source[`${fullKey}__expires__`] || Date.now + 1
        const now = Date.now()

        if (now >= expired) {
            this.remove(key)
            return
        }
        const value = source[fullKey] ? JSON.parse(source[fullKey]) : source[fullKey]
        return value
    }
    /*
     * remove 删除指定key
     * @ param {String}     key 键
     */
    remove(key) {
        const data = this.source
        const fullKey = this.getFullKey(key)
        const value = data[fullKey]
        delete data[fullKey]
        delete data[`${fullKey}__expires__`]
        return value
    }
    /**
     * 清除所有缓存
     */
    clear() {
        localStorage.clear()
    }
}

export default new Storage('WINK')
// 测试
// const s = new Storage('WINK')
// s.set('a', 100)
// s.set('b', 100, 10)
// s.get('a') // 100
// s.get('b') // 100

// 10s之后
// s.get('a') // 100
// s.get('b') // undefined
