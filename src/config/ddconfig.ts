
export type DDProjectConfig = {
    order? : number;
    title : string;
    url : string;
}

export type DDConfig = {
    /**
     * Provide full url to another DDConfig file for default values
     *
     * @example "https://med.leuffen.de/ddconfig.json"
     *
     */
    extends? : string;

    /**
     * The Project title for the navbar and the title tag
     */
    title? : string;

    /**
     * the Site to initially load if no hash is provided
     *
     * Default: /README.md
     */
    startsite?: string;

    navbar? : {
        /**
         * The logo url
         */
        logo? : string;

    }

    examples? : {

    }

    projects? : DDProjectConfig[]

}

export function loadConfig(url : string) : Promise<DDConfig> {
    return fetch(url).then(r => r.json());
}
