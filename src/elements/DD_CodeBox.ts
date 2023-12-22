import {customElement, KaCustomElement, template} from "@kasimirjs/embed";
import * as css from "../style/codebox.scss";

// language=html
const html = `
    <style>${css.default.toString()}</style>
    <div class="codebox">
        <div class="codebox__header">
            <div class="codebox__header__title">[[title]]</div>
            <div class="codebox__header__actions">
                <button class="codebox__header__actions__button" ka.on.click="copy">Copy</button>
            </div>
        </div>
        <div class="codebox__content">
            <article ka.ref="'html'"></article>
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
            title: ""
        });
    }

    static get observedAttributes() {
        return ["url"];
    }

    async connectedCallback() {
        super.connectedCallback();


        let url = this.getAttribute("url");


        let htmlElement = this.scope.$ref["html"];
        // Attach shadow dom
        let shadowRoot = htmlElement.attachShadow({mode: "open"});
        shadowRoot.innerHTML = await fetch(url).then(r => r.text());



    }

}
