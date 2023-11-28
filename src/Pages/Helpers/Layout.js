import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import "./css/Layout.css"


const Layout = () => {


    const [loginDisplay, setLoginDisplay] = useState(true);
    const [usernameDisplay, setUsernameDisplay] = useState(false);
    const [username, setUsername] = useState(true);

    return (
        <>



            <nav className="header">
                <div className="navigation ">
                    <ul>
                        <li> <Link to="/">Dashboard </Link></li>
                        <li><Link to="/Account">Account </Link></li>
                        <li> <Link to="/Transaction">Transaction </Link></li>



                        {


                            loginDisplay ?
                                <>
                                    <button onClick={""}>Google Signin</button>

                                </> : <>
                                    <button onClick={""}>Google Sign out </button>
                                </>

                        }
                    </ul>
                </div>
            </nav>

            {


                usernameDisplay ?
                    <>
                        {username}

                    </> : <>

                    </>

            }
            <br></br>

            <Outlet />

            <br></br>
            <br></br>
            <br></br>

        </>

    )
};

export default Layout;