import React, { createContext, useContext } from 'react';

// Create the context
export const BaseURLContext = createContext();
const backendUrl = import.meta.env.VITE_BACKEND_URL;
// Provider component to wrap the app
export const BaseURLProvider = ({ children }) => {
    const BASE_URL = backendUrl; // Replace with your actual base URL

    return (
        <BaseURLContext.Provider value={BASE_URL}>
            {children}
        </BaseURLContext.Provider>
    );
};

// Custom hook for consuming the context
export const useBaseURL = () => {
    return useContext(BaseURLContext);
};
