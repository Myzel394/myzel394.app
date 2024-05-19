import fs from 'fs';
import { Readable } from "stream";
import { finished } from "stream/promises";

/* Take this bash script and convert it to a Node.js script.
echo "Getting url"
# Get the Bing picture of the day
wallpaper_path=$(curl 'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US' -s | rg '(?<="url":")(.*)(?=","urlbase")' -or '$1' --pcre2)
wallpaper_url="https://www.bing.com/$wallpaper_path"
echo "Found url: $wallpaper_url"

# Get the filename
date_formatted=$(date -u +%Y%m%d)
filename='wallpaper.jpg'

echo "Downloading wallpaper to $filename"
# Download the wallpaper
wget -O $filename $wallpaper_url -q
*/

const OUTPUT = "wallpaper.jpg";

async function main() {
    let wallpaper_path;
    {
        // Get the Bing picture of the day
        const response = await fetch('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US');
        const data = await response.json();
        
        wallpaper_path = data.images[0].url;
    }

    const wallpaper_url = `https://www.bing.com${wallpaper_path}`;

    console.log(`Found url: ${wallpaper_url}`);

    // Get the filename
    
    console.log(`Downloading wallpaper to ${OUTPUT}`);

    // Download the wallpaper
    const stream = fs.createWriteStream(OUTPUT);
    const { body } = await fetch(wallpaper_url);
    await finished(Readable.fromWeb(body).pipe(stream));

    console.log("Done!");
}

main()

