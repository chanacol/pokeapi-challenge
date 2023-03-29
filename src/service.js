import https from "https";

const client = {
  getPokemon: async (name) => {
    return await get(`/pokemon/${name}`);
  },
  listPokemons: async (limit, offset) => {
    let url = "/pokemon";
    let parameters = [];
    if (limit) {
      parameters.push(`limit=${limit}`);
    }

    if (offset) {
      parameters.push(`offset=${offset}`);
    }
    if (parameters.length) {
      url += `?${parameters.join("&")}`;
    }

    const pokemons = await get(url).results;
    return await Promise.allSettled(
      pokemons.map((pokemon) => get(pokemon.url))
    );
  },
  listPokemonsPerType: async (type) => {
    return await get(`/type/${type}`);
  },
};

function get(path) {
  return new Promise((resolve, reject) => {
    let response = "";
    const req = https.request(
      {
        hostname: "pokeapi.co/api/v2",
        path,
        method: "GET",
      },
      (res) => {
        console.log(`statusCode: ${res.statusCode}`);

        res.on("data", (d) => {
          response += d;
        });
        res.on("end", function () {
          resolve(JSON.parse(response));
        });
      }
    );

    req.on("error", (error) => {
      console.error(error);
      reject(error);
    });

    req.end();
  });
}

export default client;
