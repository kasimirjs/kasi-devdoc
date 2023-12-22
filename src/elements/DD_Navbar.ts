

import * as navCss from '../style/navbar.scss';
import {customElement, KaCustomElement, template} from "@kasimirjs/embed";


console.log(navCss.default.toString());

// language=html
const html = `
    <style>${navCss.default.toString()}</style>
    <nav class="navbar">
        <div class="navbar__logo">
            <img src="https://med.leuffen.de/assets/leuffen-logo-white.svg" alt="KasimirJS Logo" height="40">
            
         
        </div>

      


        <ul class="navbar__menu">
            <li><a>Home</a></li>
            <li><a>Home</a></li>
            <li><a>Home</a></li>
    
        </ul>
    </nav>
`;


@customElement()
@template(html, {mode: "open"})
export class DD_Navbar extends KaCustomElement {

}
