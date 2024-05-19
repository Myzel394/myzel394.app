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
