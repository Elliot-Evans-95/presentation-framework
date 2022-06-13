import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
import typescript from 'highlight.js/lib/languages/typescript'

import { Names } from '../slide/dom.type'
import { DocumentWrapper } from '../documentWrapper/document-wrapper'

// hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('typescript', typescript)

export class Highlighter {
    constructor(document: DocumentWrapper) {
        hljs.registerLanguage('typescript', typescript)

        document
            .querySelectorAll(`.${Names.CODE}`)
            .forEach((codeBlock) => hljs.highlightElement(codeBlock))
    }
}
