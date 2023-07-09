"use client";
import { useRouter } from 'next/navigation';

const Details = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <div>
           enter {id}
        </div>
    )
}

export default Details