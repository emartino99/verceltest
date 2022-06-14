import { WebPartContext } from "@microsoft/sp-webpart-base";
import { SPRest } from "@pnp/sp/presets/all";
import { INews } from '../models';

export const getNews = async (context: WebPartContext, sp: SPRest): Promise<INews[]> =>  {
  const title = context.pageContext.web.languageName === "en-US" ? "Site Pages" : "Pagine del sito";
  return await sp.web.lists.getByTitle(title)
    .items.filter("PromotedState eq '2'")
    .top(20)
    .select("Title", "Description", "BannerImageUrl", "FirstPublishedDate", "FileRef")
    .orderBy("FirstPublishedDate", false)();
};