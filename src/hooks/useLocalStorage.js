import { useState } from "react";

function useInput(initialValue) {
    const [storedValue, setStoredValue] = useState(initialValue);

    const customSetter = newStoredValue => {
        setStoredValue(newStoredValue);
    };

    return [storedValue, customSetter];
}

function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useInput(() => {
        return window.localStorage.getItem(key) || initialValue;
    });

    const customSetter = newStoredValue => {
        setStoredValue(newStoredValue);
        window.localStorage.setItem(key, newStoredValue);
    };

    return [storedValue, customSetter];
}

export default useLocalStorage