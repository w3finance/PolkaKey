import i18n from "i18next";

i18n.init({
    lng: 'en',
    resources: {
        en: {
            translation: {
                "tip1": "PolkaKey is offline support, it is recommended for offline use.",
                "tip2": "PolkaKey does not store any info locally, please back up the mnemonic.",
                "yes": "OK, I understand",
                "begin": "Let's begin!",
                "github": "View our code on Github",
                "network1": "Offline",
                "network2": "Please disconnect the network",
                "language": "Change Language",
                "generatePolkadot": "Generate a Polkadot Address",
                "generateKusama": "Generate a Kusama Address",
                "address": "Address",
                "mnemonic": "Mnemonic",
                "privateKey": "Public Key",
                "regenerate": "Regenerate",
                "back": "Back",
                "copy": "Click to Copy"
            }
        },
        zh: {
            translation: {
                "tip1": "PolkaKey可以在没有网络情况下使用，为了安全建议您断开网络",
                "tip2": "PolkaKey不会保存任何信息，因此请备份助记词到安全的地方",
                "yes": "好的, 我明白了",
                "begin": "马上开始!",
                "github": "访问我们的GitHub",
                "network1": "离线状态非常安全",
                "network2": "建议您断开网络",
                "language": "切换语言",
                "generatePolkadot": "创建Polkadot地址",
                "generateKusama": "创建Kusama地址",
                "address": "地址",
                "mnemonic": "助记词",
                "privateKey": "Public Key",
                "regenerate": "重新生成",
                "back": "返回",
                "copy": "复制"
            }
        }
    },
    fallbackLng: 'en'
}).then(r => r);

export default i18n;
