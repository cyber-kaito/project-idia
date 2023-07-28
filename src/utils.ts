export function getImageUrl(
   type: string,
   size: string,
   id: number,
   groovy: string
) {
   return "/" + type + "_" + size + "_" + id + "_" + groovy + ".webp";
}
