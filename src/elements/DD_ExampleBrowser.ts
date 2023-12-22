import * as ebCss from '../style/examplebrowser.scss';
import {customElement, KaCustomElement, template} from "@kasimirjs/embed";
import {DDConfig} from "../config/ddconfig";


// language=html
const html = `
    <style>${ebCss.default.toString()}</style>
    <section class="examplebrowser">
        <nav class="">
           
            <ul>
                <li ka.for="let e of config.examples"><a ka.attr.href="'#' + e.url">[[e.name]]</a></li>
            </ul>
         
        </nav>

      


        <article class="navbar__menu">
          
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

}
