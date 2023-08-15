export function getAssetURL(path: string) {
   const ASSETS = process.env.NEXT_PUBLIC_ASSETS_URL;
   return `${ASSETS}${path}`;
}
export function getDataURL(path: string) {
   const DATA = process.env.NEXT_PUBLIC_DATA_URL;
   return `${DATA}${path}`;
}
