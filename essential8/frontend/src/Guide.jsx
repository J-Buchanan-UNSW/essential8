import { useParams } from "react-router-dom";

export default function Guide() {
    const { controlId, guideId } = useParams();
    console.log(controlId, guideId);

    return (
        <>
            <h1>Guide</h1>
        </>
    )
}