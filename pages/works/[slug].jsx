import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

export default function Work() {
    const router = useRouter();
    const [workData, setWorkData] = useState([]);

    useEffect(function () {
        if (!router.query.slug) return;

        import("../../data/works/" + router.query.slug)
            .then(json => setWorkData(json))
            .catch(console.error)
    }, [router.query.slug])


    return (
        <article>
            <h2>{workData.title}</h2>
            <h4>{workData.description}</h4>
            <img src={`/works/${router.query.slug}/${workData.icon}`} alt={workData.title} />
        </article>
    )
}