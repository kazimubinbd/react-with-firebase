import { useContext } from "react";
import { UserAuthContext } from "../Context/AuthContext";

const Home = () => {    

    const rony = useContext(UserAuthContext)
    console.log(rony.user.user);

    return (
        <div className='container'>
            <h1>This is home page</h1>
        </div>
    );
};

export default Home;