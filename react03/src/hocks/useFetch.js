import { useCallback, useState } from "react";

const BASE_URL = 'http://localhost:1337/api';

const useFetch = (req, cb) => {
    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(false);

    const fetchData = useCallback(async () => {
        setLoading(true);
        const res = await fetch(BASE_URL + req.api, {
            method: req.method || 'get',
            headers: { 'Content-Type': 'application/json' },
            body: req.body ? JSON.stringify(req.body) : null
        });
        const jsonData = await res.json();
        setTimeout(() => setData(jsonData.data), 500);
        cb && cb();
        setLoading(false);
    }, [])

    return { data, setData, loading, fetchData };
}

export default useFetch;
