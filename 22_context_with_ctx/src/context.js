import { createContext } from "preact";
import { languages } from "./texts.js";

export const LangContext = createContext(languages[0]);
