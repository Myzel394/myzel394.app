import { writeFile } from 'node:fs/promises';

// Downloads the current Bing wallpaper to tmp folder and returns the path to the downloaded file
export default async function downloadBingWallpaper(): Promise<string> {
    const URL = "https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US";

    const response = await fetch(URL);

    const data = await response.json();

    const url = data.images[0].url;

    const wallpaperResponse = await fetch(`https://www.bing.com${url}`);

        console.log(wallpaperResponse);


    return "";
}
