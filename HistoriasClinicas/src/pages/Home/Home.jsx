import IntroductionContent from "../../components/IntroductionContent";
import Login from "../../components/Login";
import './Home.css'; 

const Home = () => {
    return (
        <>
            <IntroductionContent />
            <div className="login-container">
                <Login />
            </div>
        </>
    );
};

export default Home;
