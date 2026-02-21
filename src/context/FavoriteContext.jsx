import { createContext, useState, useContext, useEffect } from "react";

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
 
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });


  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  
  const addToFavorite = (product) => {
    setFavorites((prevFavorites) => {
      const isExisting = prevFavorites.find((item) => item.id === product.id);
      if (isExisting) {
        return prevFavorites; 
      } else {
        return [...prevFavorites, product];
      }
    });
  };

 
  const removeFromFavorite = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((item) => item.id !== id),
    );
  };


  const toggleFavorite = (product) => {
    setFavorites((prevFavorites) => {
      const isExisting = prevFavorites.find((item) => item.id === product.id);
      if (isExisting) {
        return prevFavorites.filter((item) => item.id !== product.id); 
      } else {
        return [...prevFavorites, product]; 
      }
    });
  };

 
  const totalFavorites = favorites.length;

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        addToFavorite,
        removeFromFavorite,
        toggleFavorite,
        totalFavorites,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorite = () => useContext(FavoriteContext);
