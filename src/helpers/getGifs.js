export const getGifs = async( categoria ) => {
    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${ encodeURI( categoria ) }&api_key=6SCb8II3BVZskSd9qXhpaxp7g4eQfkbB`;
    const resp = await fetch( url );
    const {data} = await resp.json();
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        };
    });
    return gifs;
};