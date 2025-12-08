import {Locales, type Dictionary} from "intlayer";

const searchContent = {
    key: "search",
    locale: Locales.ENGLISH,
    content: {
        message: "Hello World!",
        welcomeMessage: "This is the welcome message!",
    },
} satisfies Dictionary;

export default searchContent;