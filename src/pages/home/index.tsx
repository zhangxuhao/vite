
import styles from './index.module.less';
import { useNavigate,useRoutes } from 'react-router-dom'

type TPageType = {
    "one": string;
}
type TPageTypeNames = keyof TPageType;


const Home: React.FC = (props) => {
    const navigate = useNavigate()
    console.log("props",props)
    const handleJumpPage = (type: TPageTypeNames) => {
        const pages: TPageType = {
            "one": "/pageOne"
        } 
        navigate(pages[type])
    }

    return <div className={styles.body}>
        <div>home</div>

        <button className={styles.btn} onClick={() => handleJumpPage('one')}>
            jump page one
        </button>


    </div>
}

export default Home;