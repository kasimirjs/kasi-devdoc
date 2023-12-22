import {ka_dom_ready} from "@kasimirjs/embed";
import {DD_Navbar} from "./elements/DD_Navbar";
import {DD_ExampleBrowser} from "./elements/DD_ExampleBrowser";
import {loadConfig} from "./config/ddconfig";

export async function register() {
    await ka_dom_ready();

    document.body.append(new DD_Navbar());
    document.body.append(new DD_ExampleBrowser(await loadConfig("/ddconfig.json")));



}
