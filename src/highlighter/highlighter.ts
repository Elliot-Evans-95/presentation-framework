// @ts-ignore
import hljs from 'highlight.js/lib/highlight';
import 'highlight.js/styles/tomorrow.css';
// @ts-ignore
import typescript from 'highlight.js/lib/languages/typescript';
import {Names} from "../slide/dom.type";
import {DocumentWrapper} from "../documentWrapper/document-wrapper";

hljs.registerLanguage('typescript', typescript);

export class Highlighter {
    constructor(document: DocumentWrapper) {
        hljs.registerLanguage('typescript', typescript);

        document
            .querySelectorAll(`.${Names.CODE}`)
            .forEach( (codeBlock) => hljs.highlightBlock(codeBlock));
    }
}
