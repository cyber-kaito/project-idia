export function getAssetURL(path: string) {
   const ASSETS = "https://s3.us-east-2.amazonaws.com/assets.idia.moe/";
   return `${ASSETS}${path}`;
}
