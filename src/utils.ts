export function getAssetURL(path: string) {
   const ASSETS = process.env.NEXT_PUBLIC_ASSETS_URL;
   return `${ASSETS}${path}`;
}
