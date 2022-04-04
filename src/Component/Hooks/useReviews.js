import { useEffect, useState } from "react";

const useReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('FakeData/ReviewFakeData.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return [reviews];
}

export default useReviews