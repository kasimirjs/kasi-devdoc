import {customElement, KaCustomElement, template} from "@kasimirjs/embed";
import * as css from "../style/codebox.scss";
import {__exampleMap} from "../functions";
import {extractExample} from "../extractExample";
import * as hlcss from  "highlight.js/styles/github.css";
import hljs from "highlight.js";
// language=html
const html = `
    <style>${css.default.toString()}</style>
    <style>${hlcss.default.toString()}</style>
    <div class="codebox">
        <div class="codebox__error" ka.if="error !== null">[[error]]</div>
        <div class="codebox__header">
            <div class="codebox__header__title">[[title]]</div>
            <div class="codebox__header__actions">
                <button class="codebox__header__actions__button" ka.on.click="copy">Copy</button>
            </div>
        </div>
        <div class="codebox__content">
            <article ka.ref="'html'"></article>
            <code >
                <pre ka.ref="'code'"></pre>
            </code>
        </div>
    </div>

`;

/**
 * Create a example box with a working example and code from external file
 */
@customElement("dd-codebox")
@template(html, {mode: "open"})
export class DD_CodeBox extends KaCustomElement {

    constructor() {
        super();
        let scope = this.init({
            error: null,
            title: ""
        });
    }

    static get observedAttributes() {
        return ["name"];
    }

    async connectedCallback() {
        super.connectedCallback();


        let example = __exampleMap.get(this.getAttribute("name"));
        if (!example) {
            this.scope.error = "Example name '" + this.getAttribute("name") + "' not found";
            return;
        }

        let url = this.getAttribute("url");


        let htmlElement = this.scope.$ref["html"];
        // Attach shadow dom
        let shadowRoot = htmlElement.attachShadow({mode: "open"});

        if (example.starterHTML) {
            shadowRoot.innerHTML = example.starterHTML;
        }
        if( example.starter) {
            example.starter(shadowRoot, example.example);
        } else {
            example.example();
        }


        let codeElement = this.scope.$ref["code"];
        let code = await fetch(example.filename).then(r => r.text());
        code = extractExample(example.name, code);
        codeElement.innerHTML =      hljs.highlight(code, {language: "typescript"}).value;

        const frameworks = {
            bootstrap5: "https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css"
        };

        for(let f in example.htmlFrameworks ?? {}) {
            let link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = frameworks[f];
            shadowRoot.appendChild(link);
        }


    }

}
