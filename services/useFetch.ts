import { useEffect, useState, useCallback } from "react";

type UseFetchResult<T> = {
    data: T | null;
    loading: boolean;
    error: Error | null;
    refetch: () => Promise<void>;
    reset: () => void;
};

export default function useFetch<T>(
    fetchFunction: () => Promise<T>,
    autoFetch: boolean = true
): UseFetchResult<T> {

    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);

            const result = await fetchFunction();
            setData(result);

        } catch (err) {
            setError(err instanceof Error ? err : new Error("An error occurred"));
        } finally {
            setLoading(false);
        }
    }, [fetchFunction]);

    const reset = () => {
        setData(null);
        setLoading(false);
        setError(null);
    };

    useEffect(() => {
        if (autoFetch) {
            fetchData();
        }
    }, [autoFetch, fetchData]);

    return { data, loading, error, refetch: fetchData, reset };
}
