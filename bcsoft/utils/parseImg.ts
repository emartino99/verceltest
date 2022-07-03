
export const getRelativePath =   (item:string): string =>{
      const parsed = JSON.parse(item);
    return parsed.serverRelativeUrl
}
export const getMediaPath = (item: string) => `${process.env.NEXT_PUBLIC_BASE_URL_ASSETS}${getRelativePath(item)}`;
