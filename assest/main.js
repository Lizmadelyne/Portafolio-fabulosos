const API = "https://youtube-v3-alternative.p.rapidapi.com/video?id=dQw4w9WgXcQ";
const content = null || document.getElementById("content");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '17c6b1552cmshd409b52297037e1p11818djsn7a1a16f21600',
		'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
	}
};


// aqui es mi funcion 
async function fetchData(urlApi){
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () =>{
try {
  const videos = await fetchData(API);
  let view = `
  ${videos.item.map(video => `
        <div class="group relative">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnail.high.url}" alt="${video.snippet.description}" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${video.snippet.title}
            </h3>
          </div>
        </div>
  `).slice(0,4).join('')}
  
  `;
} catch (error) {
  console.log(error);
  
}
})();



    