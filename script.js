const episodesUl = document.querySelector("ul.episodes");

const episodes = [
  {
    id: 1,
    name: "John Quick Origin Story",
  },
  {
    id: 2,
    name: "Amy Origin Story",
  },
  {
    id: 3,
    name: "Tech Behind the Podcast",
  },
  {
    id: 4,
    name: "Tech Behind Teach.me",
  },
];

const renderEpisodes = () => {
  const episodesHtmlString = episodes
    .map((episode) => {
      return `<li><label for="episode-${episode.id}"><input type="checkbox" name="episode-${episode.id}" id="episode-${episode.id}"/><span>${episode.id} || ${episode.name}</span></label></li>`;
    })
    .join("");
  episodesUl.innerHTML = episodesHtmlString;
};

renderEpisodes();
