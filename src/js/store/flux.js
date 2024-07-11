const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      favourite: [],
      characters: [],
      planets: [],
      vehicles: [],
      favourites: [],
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
      getVehicles: async () => {
        const store = getStore();

        try {
          const response = await fetch("https://www.swapi.tech/api/vehicles", {
            method: "GET",
            headers: {
              accept: "application/json",
            },
          });
          const data = await response.json();
          console.log(data);
          setStore({ vehicles: data.results });
          console.log(store.vehicles);
        } catch (error) {
          console.log(error);
        }
      },
      sendFavourite: (id) => {
        const store = getStore();
        const findCharacter = store.characters.find(
          (character) => character.uid === id
        );
        console.log(findCharacter);
        const favourites = [...store.favourites, findCharacter];
        setStore({ favourites });
        console.log(store.favourites);
      },
      deleteFavourite: (id) => {
        const store = getStore();
        const updateFavourites = store.favourites.filter(
          (favourite) => favourite.uid !== id
        );
        setStore({ ...store, favourites: updateFavourites });
      },
      sendFavouritePlanet: (id) => {
        const store = getStore();
        const findPlanet = store.planets.find((planeta) => planeta.uid === id);
        console.log(findPlanet);
        const favouritePlanet = [...store.favourites, findPlanet];
        setStore({ favourites: favouritePlanet });
        console.log(store.favourites);
      },
      deleteFavouritePlanet: (id) => {
        const store = getStore();
        const filterPlanets = store.planets.filter(
          (planet) => planet.uid !== id
        );
        setStore({ ...store, favourites: filterPlanets });
      },
      sendFavouriteVehicle: (id) => {
        const store = getStore();
        const findVehicle = store.vehicles.find(
          (vehiculo) => vehiculo.uid === id
        );
        console.log(findVehicle);
        const favouriteVehicle = [...store.favourites, findVehicle];
        setStore({ favourites: favouriteVehicle });
        console.log(store.favourites);
      },
      deleteFavouriteVehicle: (id) => {
        const store = getStore();
        const filterVehicles = store.vehicles.filter(
          (vehicle) => vehicle.uid !== id
        );
        setStore({ ...store, favourites: filterVehicles });
      },
    },
  };
};

export default getState;
