import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [data, setData] = useState({});

    const getData = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(url);
            const result = await response.json();

            if (!response.ok) {
                throw new Error('Some thing went wrong.');
            }

            setIsLoading(false)
            setData(result);
            setError()

        } catch (error) {
            setIsLoading(false);
            setError(error);
            setData({});
        }
    }
    useEffect(() => { getData() }, []);
    return {
        isLoading,
        error,
        data
    }
}

export default useFetch;