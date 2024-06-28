const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      favourite: [],
      characters: [],
      planets: [],
    },

    actions: {
      getCharacters: async () => {
        const store = getStore();
        try {
          const response = await fetch("https://www.swapi.tech/api/people", {
            method: "GET",
            headers: {
              accept: "application/json",
            },
          });

          const data = await response.json();
          console.log(data);
          setStore({ characters: data.results });
          console.log(store.characters);
        } catch (error) {
          console.log(error);
        }
      },
      getPlanets: async () => {
        const store = getStore();
        try {
          const response = await fetch("https://www.swapi.tech/api/planets", {
            method: "GET",
            headers: {
              accept: "application/json",
            },
          });
          const data = await response.json();
          console.log(data.results);
          setStore({ planets: data.results });
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
};

export default getState;
