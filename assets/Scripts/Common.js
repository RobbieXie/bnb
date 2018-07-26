module.exports = {
    socket: null,
    roomId: 0,
    moveMap: false,
    TouchType : cc.Enum({
        DEFAULT: 0,
        FOLLOW: 1,
    }),

    DirectionType : cc.Enum({
        FOUR: 4,
        EIGHT: 8,
        ALL: 0,
    }),

    KeyCode: cc.Enum({
        w: 87,
        s: 83,
        a: 65,
        d: 68,
        j: 74
    }),
    userInfo: {
        nickName: 'unknown',
        avatarUrl: null,
        gender: 1
    },
    userInfos: [],
    map: {
        basicMap: []
    },
    windowSize:null,
    host: 'localhost',
    // host:'212.64.17.36',
    port: 4000
}