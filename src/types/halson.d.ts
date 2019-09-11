/** Declaration file generated by dts-gen */

export = halson;

declare function halson(data: any): any;

declare namespace halson {
    class Resource {
        constructor(data: any);

        addEmbed(rel: any, embed: any): any;

        addLink(rel: any, link: any): any;

        getEmbed(rel: any, filterCallback: any, def: any): any;

        getEmbeds(rel: any, filterCallback: any, begin: any, end: any): any;

        getLink(rel: any, filterCallback: any, def: any): any;

        getLinks(rel: any, filterCallback: any, begin: any, end: any): any;

        insertEmbed(rel: any, index: any, embed: any): any;

        listEmbedRels(): any;

        listLinkRels(): any;

        removeEmbeds(rel: any, filterCallback: any): any;

        removeLinks(rel: any, filterCallback: any): any;

    }

}
