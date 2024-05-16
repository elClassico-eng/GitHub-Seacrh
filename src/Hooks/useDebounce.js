import { useEffect, useState } from "react";

export const useDebounce = (func, delay = 300) => {
    const [debounsed, setDebounced] = useState(func);

    useEffect(() => {
        const handler = setTimeout(() => setDebounced(func), delay);
        return () => clearTimeout(handler);
    }, [func, delay]);
    return debounsed;
};
