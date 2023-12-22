import * as ebCss from '../style/examplebrowser.scss';
import {customElement, ka_sleep, KaCustomElement, template} from "@kasimirjs/embed";
import {DDConfig} from "../config/ddconfig";
import markdownit from "markdown-it";
import hljs from "highlight.js";
import * as hlcss from  "highlight.js/styles/github.css";


// language=html
const html = `
    <style>${ebCss.default.toString()}</style>
    <style>${hlcss.default.toString()}</style>
    <section class="examplebrowser">
        <nav class="">
           
            <ul>
                <li ka.for="let e of config.examples"><a ka.attr.href="'#' + e.url">[[e.name]]</a></li>
            </ul>
         
        </nav>

      


        <article>
            <div class="github" ka.ref="'html'"></div>
        </article>
    </section>
`;


@customElement()
@template(html, {mode: "open"})
export class DD_ExampleBrowser extends KaCustomElement {

    constructor(config: DDConfig) {
        super();
        let scope = this.init({
            config : config
        });



    }

    async loadExample(url : string) {
        let example = await fetch(url).then(r => r.text());
        if (url.endsWith(".md")) {

            let r = markdownit({
                html: true,
                linkify: true,
                typographer: true
            });
            example = r.render(example);
        }
        this.scope.$ref["html"].innerHTML = example;
    }


    async highlight() {
        await ka_sleep(100);
        let nodes = this.scope.$ref["html"].querySelectorAll("pre code");
        nodes.forEach((block) => {
            let lang = block.className.replace("language-", "");

            hljs.highlightElement(block);
        });
    }



    async connectedCallback(): Promise<void> {
        super.connectedCallback();

        let page =window.location.hash.substr(1) ;
        if (!page) {
            page = this.scope.config.startsite || "/README.md";
        }

        this.loadExample(page);
        this.highlight();
        window.addEventListener("hashchange", () => {
            console.log("hashchange");
            this.loadExample(window.location.hash.substr(1));
            this.highlight();
        });



    }

}
