import downloadBingWallpaper from "$lib/apis/download-bing-wallpaper"

export const prerender = true

export const load = async () => {
    await downloadBingWallpaper();

    return {}
}

