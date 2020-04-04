import i18n from "i18next";

i18n.init({
    lng: 'en',
    resources: {
        en: {
            translation: {
                "tip1": "PolkaKey is offline support, it is recommended for offline use.",
                "tip2": "PolkaKey does not store any info locally, please store your secret keys.",
                "yes": "Okay, I understand",
                "begin": "Let's begin!",
                "github": "View our code on Github",
                "network1": "It's secure, network is down!",
                "network2": "For security, it is recommended for offline use",
                "language": "Change Language",
                "generatePolkadot": "Generate a Polkadot Address",
                "generateKusama": "Generate a Kusama Address",
                "address": "Address",
                "mnemonic": "Mnemonic",
                "publicKey": "Public Key",
                "regenerate": "Regenerate",
                "back": "Back",
                "copy": "Click to Copy",
                "generate": "Generate",
                "helper": "Determines what cryptography will be used to create this account. It's recommended that you use sr25519, unless you want to create a session account in order to validate on Polkadot.",
                "tips": "Only paste your secret key in 100% safe places"
            }
        },
        zh: {
            translation: {
                "tip1": "PolkaKey可以在断网情况下使用，为了安全建议您断开网络",
                "tip2": "PolkaKey不会保存任何信息，因此请备份助记词到安全的地方",
                "yes": "好的, 我明白了",
                "begin": "马上开始!",
                "github": "访问我们的GitHub",
                "network1": "网络已断开",
                "network2": "为了安全，建议您断开网络",
                "language": "切换语言",
                "generatePolkadot": "创建Polkadot地址",
                "generateKusama": "创建Kusama地址",
                "address": "地址",
                "mnemonic": "助记词",
                "publicKey": "Public Key",
                "regenerate": "重新生成",
                "back": "返回",
                "copy": "复制",
                "generate": "创建",
                "helper": "选择以哪种加密方法创建此账户, 建议使用默认的sr25519, 除非您需要创建一个session account在Polkadot上做验证人",
                "tips": "只在100%安全的地方粘贴您的助记词"
            }
        }
    },
    fallbackLng: 'en'
}).then(r => r);

export default i18n;
