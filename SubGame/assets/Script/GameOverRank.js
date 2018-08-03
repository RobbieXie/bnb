cc.Class({
    extends: cc.Component,
    name: "GameOverRank",
    properties: {
        backSprite: cc.Node,
        rankLabel: cc.Label,
        avatarImgSprite: cc.Sprite,
        nickLabel: cc.Label,
        topScoreLabel: cc.Label,
    },

    init: function (rank, data,isPlayer){
        const avatarUrl = data.avatarUrl;
        // let nick = data.nickname.length <= 10 ? data.nickname : data.nickname.substr(0, 10) + "...";
        const nick = data.nickname;
        const grade = data.KVDataList.length != 0 ? data.KVDataList[0].value : 0;

        if (rank % 2 == 0){
            this.backSprite.color = new cc.Color(55, 55, 55, 255);
        }
        if (isPlayer){
            this.rankLabel.node.color = new cc.Color(0, 255, 0, 255);
        }
        this.rankLabel.string = (rank + 1).toString();
        this.createImage(avatarUrl);
        this.nickLabel.string = nick;
        this.topScoreLabel.string = grade.toString() + "胜";
    },
    createImage (avatarUrl){
        if (CC_WECHATGAME){
            try {
                const image = wx.createImage();

                image.onload = () => {
                    try {
                        const texture = new cc.Texture2D();

                        texture.initWithElement(image);
                        texture.handleLoadedTexture();
                        this.avatarImgSprite.spriteFrame = new cc.SpriteFrame(texture);
                    } catch (e){
                        cc.log(e);
                        this.avatarImgSprite.node.active = false;
                    }
                };
                image.src = avatarUrl;
            }catch (e){
                cc.log(e);
                this.avatarImgSprite.node.active = false;
            }
        } else {
            cc.loader.load({
                url: avatarUrl, type: "jpg"
            }, (err, texture) => {
                this.avatarImgSprite.spriteFrame = new cc.SpriteFrame(texture);
            });
        }
    }

});
