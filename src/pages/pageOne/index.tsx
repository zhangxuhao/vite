import { useEffect } from "react";
import { useParams } from 'react-router'
import { useNavigate, useRoutes } from 'react-router-dom'


const PageOne = (props: any) => {
    let params = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        console.log("params",params,params.id)
    }, [])

    const handleGoback = () => {
        navigate(-1)
    }
    return (<div>
        <div>page one</div>

        <button
            onClick={handleGoback}
            style={{ width: 100, height: 60, lineHeight: "60px", fontSize: 20, margin: 40, border: "1px solid #ccc", textAlign: "center" }}
        > go Back </button>
    </div>)
}


export default PageOne;
