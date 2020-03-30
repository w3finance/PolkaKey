import i18n from "i18next";

i18n.init({
    lng: 'en',
    resources: {
        en: {
            translation: {
                "tip1": "PolkaKey可以在断网情况下使用，为了更加安全建议您断开网络",
                "tip2": "PolkaKey不会保存任何信息，因此请把助记词备份到安全的地方",
                "yes": "Yes, I understand",
                "begin": "Let's begin!",
                "github": "View our code on Github",
                "network": "Network status",
                "language": "Change Language",
                "generatePolkadot": "Generate a Polkadot Address",
                "generateKusama": "Generate a Kusama Address"
            }
        },
        zh: {
            translation: {
                "tip1": "PolkaKey可以在断网情况下使用，为了更加安全建议您断开网络",
                "tip2": "PolkaKey不会保存任何信息，因此请把助记词备份到安全的地方",
                "yes": "好的，我明白了",
                "begin": "马上开始!",
                "github": "访问我们的GitHub",
                "network": "网络状态",
                "language": "切换语言",
                "generatePolkadot": "创建Polkadot地址",
                "generateKusama": "创建Kusama地址"
            }
        }
    },
    fallbackLng: 'en'
}).then(r => r);

export default i18n;
