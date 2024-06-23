import React, { useContext, useState } from "react";
export const appContext = React.createContext();
export const useGlobalContext = () => {
  return useContext(appContext);
};
export default function Context({ children }) {
  const [currentPage, setCurrentPage] = useState(false);
  return (
    <appContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </appContext.Provider>
  );
}
