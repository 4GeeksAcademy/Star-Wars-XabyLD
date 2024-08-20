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
      getUniqueCharacter: async () => {
        const actions = getActions();

        try {
          const response = await fetch(`https://www.swapi.tech/api/people/`, {
            method: "GET",
            headers: {
              accept: "application/json",
            },
          });

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json();
          const personajesDataPromises = data.results.map(async (personaje) => {
            try {
              return await actions.getCharacters(personaje.uid);
            } catch (error) {
              console.error(
                `Error fetching character ${personaje.uid}:`,
                error
              );
              return null; // Opcionalmente, puedes manejar el personaje de manera distinta si falla
            }
          });

          const personajesData = await Promise.all(personajesDataPromises);
          setStore({ characters: personajesData });
          console.log(personajesData);
        } catch (error) {
          console.error("Error fetching characters list:", error);
        }
      },
      getCharacters: async (id) => {
        const store = getStore();

        try {
          const response = await fetch(
            `https://www.swapi.tech/api/people/${id}`,
            {
              method: "GET",
              headers: {
                accept: "application/json",
              },
            }
          );
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json();
          /* console.log(data.result); */
          return data.result;
        } catch (error) {
          console.log(error);
        }
      },

      getUniquePlanet: async () => {
        const actions = getActions();

        try {
          const response = await fetch(`https://www.swapi.tech/api/planets/`, {
            method: "GET",
            headers: {
              accept: "application/json",
            },
          });
          const data = await response.json();
          console.log(data.results);
          const planetsDataPromises = data.results.map(async (planeta) => {
            try {
              return await actions.getPlanets(planeta.uid);
            } catch (error) {
              console.log(error);
            }
          });
          const planetsData = await Promise.all(planetsDataPromises);
          setStore({ planets: planetsData });
          console.log(planetsData);
        } catch (error) {
          console.log(error);
        }
      },
      getPlanets: async (id) => {
        const store = getStore();

        try {
          const response = await fetch(
            `https://www.swapi.tech/api/planets/${id}`,
            {
              method: "GET",
              headers: {
                accept: "application/json",
              },
            }
          );
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          console.log("Planeta individual:", data.result);
          console.log(store.planets);
          return data.result;
        } catch (error) {
          console.log(error);
        }
      },
      getVehicles: async (id) => {
        const store = getStore();

        try {
          const response = await fetch(
            `https://www.swapi.tech/api/vehicles/${id}`,
            {
              method: "GET",
              headers: {
                accept: "application/json",
              },
            }
          );
          const data = await response.json();
          console.log("Vehiculo Individual : ", data.result);

          return data.result;
        } catch (error) {
          console.log(error);
        }
      },
      getUniqueVehicle: async () => {
        const store = getStore();
        const actions = getActions();
        try {
          const response = await fetch("https://www.swapi.tech/api/vehicles/", {
            method: "GET",
            headers: {
              accept: "application/json",
            },
          });
          const data = await response.json();
          console.log(data.result);
          const vehiclesDataPromises = data.results.map(async (vehicle) => {
            try {
              return await actions.getVehicles(vehicle.uid);
            } catch (error) {
              console.log(error);
            }
          });
          const vehiclesData = await Promise.all(vehiclesDataPromises);
          setStore({ vehicles: vehiclesData });
          console.log(vehiclesData);
        } catch (error) {
          console.log(error);
        }
      },
      sendFavourite: (id) => {
        const store = getStore();
        const findCharacter = store.characters.find(
          (character) => character.uid === id
        );
        const isDuplicate = store.favourites.some((fav) => fav.uid === id);
        console.log(findCharacter);
        if (findCharacter && !isDuplicate) {
          const favouritesCharacter = [...store.favourites, findCharacter];
          setStore({ favourites: favouritesCharacter });
        }
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
        const isDuplicate = store.favourites.some((fav) => fav.uid === id);
        console.log(findPlanet);
        if (findPlanet && !isDuplicate) {
          const favouritePlanet = [...store.favourites, findPlanet];
          setStore({ favourites: favouritePlanet });
          console.log("Planeta añadido :", findPlanet);
        } else if (isDuplicate) {
          console.log("Este elemento ya está en favoritos");
        } else {
          console.log("No se encuentra el elemento que quieres añadir");
        }
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
        const isDuplicate = store.favourites.some((fav) => fav.uid === id);
        console.log(isDuplicate);
        if (findVehicle && !isDuplicate) {
          const favouriteVehicle = [...store.favourites, findVehicle];
          setStore({ favourites: favouriteVehicle });
          console.log(store.favourites);
        }
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
