export const messages = {
  ja: {
    hello: "こんにちは！",
    section1: "これは多言語化を実現するデモです。",
    section2: "学習のため、あえてコンテキストAPIを使っていないのが特徴です。",
    section3: "すべてのコンポーネントに、言語設定をPropsで渡す必要があります。",
    bye: "さようなら〜",
  },
  en: {
    hello: "Hello!",
    section1: "In this demo, you will leran how to implement i18.",
    section2: "To learn, we try it without using Context API.",
    section3: "You need to pass current lang as Props for every components.",
    bye: "Bye-bye.",
  },
};

export const languages = Object.keys(messages);
