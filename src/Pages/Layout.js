/* eslint-disable n/handle-callback-err */
/* eslint-disable no-multi-spaces */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/display-name */
/* eslint-disable multiline-ternary */
/* eslint-disable comma-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-key */
/* eslint-disable indent */
/* eslint-disable prefer-const */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
/* eslint-disable spaced-comment */
/* eslint-disable semi */
/* eslint-disable curly */
/* eslint-disable array-callback-return */
/* eslint-disable padded-blocks */
/* eslint-disable space-before-function-paren */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */

import { Outlet, Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import "./Layout.css"


const LayoutNew = () => {


    const [loginDisplay, setLoginDisplay] = useState(true);
    const [usernameDisplay, setUsernameDisplay] = useState(false);
    const [username, setUsername] = useState(true);
    const [displayHamMenu, setDisplayHamMenu] = useState("none")
    const mobileMenuRef = useRef(null);
    const overlayRef = useRef(null);

    function openMobileSideBar(e) {
        console.log(mobileMenuRef);
        mobileMenuRef.current.style.display = "flex";
        overlayRef.current.style.display = "inline"


    }

    function closeOverlay(e) {

        overlayRef.current.style.display = "none"
        mobileMenuRef.current.style.display = "none";


    }

    function resizeListener() {
        let result = window.matchMedia("(max-width: 600px)").matches;//returns booles
        if (result === false) {
            mobileMenuRef.current.style.display = "none";
            overlayRef.current.style.display = "none";
        }
    }

    useEffect(() => {
        // const listener = () => setClosest(findClosest(queries));
        // listener();
        window.addEventListener('resize', resizeListener);
        return () => window.removeEventListener('resize', resizeListener); //Cleanup
    }, []);

    return (
        <>

            <div className="main_body">
                <section className="nav">
                    <div className="side_bar">
                        <div className="side_bar_header">
                            <div className="header_logo"><h4>Money Affpp</h4></div>
                        </div>
                        <div className="side_bar_menu">
                            <Link to="/Account">
                                <div className="menu_item">
                                    <span className="icon"><i className="fa-solid fa-sack-dollar"></i></span>Account
                                </div>
                            </Link>
                            <Link to="/">
                                <div className="menu_item">
                                    <span className="icon"><i className="fa-solid fa-gauge"></i></span>
                                    Dashboard
                                </div>
                            </Link>
                            <Link to="/Transaction">
                                <div className="menu_item">
                                    <span className="icon"><i className="fa-solid fa-tent-arrow-left-right"></i></span>
                                    Transaction
                                </div>
                            </Link>
                            <div className="menu_item">
                                <span className="icon"><i className="fa-solid fa-chart-pie"></i></span>
                                Analysis
                            </div>
                            <div className="menu_item">
                                <span className="icon"><i className="fa-solid fa-wrench"></i></span>
                                Settings
                            </div>

                            <hr />
                            <div className="menu_item">
                                <span className="icon"><i className="fa-solid fa-user"></i></span>
                                Profile
                            </div>

                            <div className="menu_item">
                                <span className="icon"><i className="fa-solid fa-right-from-bracket"></i></span>
                                Log out
                            </div>

                        </div>
                    </div>
                </section>

                <section className="body">
                    <div className="header">
                        <span>Money App</span>
                        <span className="notification"><i className="fa-solid fa-bell fa-2xl"></i></span>
                        <span className="profile"></span>
                        <span className="arrow_down"><i className="fa-solid fa-angle-down fa-2xl"></i></span>
                        <span className="hamburger" onClick={openMobileSideBar} >
                            <i className="fa-solid fa-bars fa-2xl"></i>
                        </span>
                    </div>

                    <Outlet />

                </section>

                <section className="mobile_nav" ref={mobileMenuRef}>
                    <div className="side_bar">
                        <div className="side_bar_header">
                            <div className="header_logo"><h4>Money App</h4></div>
                        </div>
                        <div className="side_bar_menu">
                            <div className="menu_item">
                                <span className="icon"><i className="fa-solid fa-sack-dollar"></i></span><Link to="/Account">Account </Link>

                            </div>
                            <div className="menu_item">
                                <span className="icon"><i className="fa-solid fa-gauge"></i></span> <Link to="/">Dashboard </Link>
                            </div>
                            <div className="menu_item">
                                <span className="icon"><i className="fa-solid fa-tent-arrow-left-right"></i></span>
                                <Link to="/Transaction">Transaction </Link>
                            </div>
                            <div className="menu_item">
                                <span className="icon"><i className="fa-solid fa-chart-pie"></i></span>
                                Analysis
                            </div>
                            <div className="menu_item">
                                <span className="icon"><i className="fa-solid fa-wrench"></i></span>
                                Settings
                            </div>

                            <hr />
                            <div className="menu_item">
                                <span className="icon"><i className="fa-solid fa-user"></i></span>
                                Profile
                            </div>

                            <div className="menu_item">
                                <span className="icon"><i className="fa-solid fa-right-from-bracket"></i></span>
                                Log out
                            </div>
                        </div>
                    </div>
                </section>
                <div
                    className="overlay" ref={overlayRef} onClick={closeOverlay}

                ></div>
            </div>








        </>

    )
};

export default LayoutNew
