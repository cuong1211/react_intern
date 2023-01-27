import '~/assets/css/style.bundle.css';
import '~/assets/plugins/global/plugins.bundle.css';
import Header from "~/components/Layout/components/Header";
import SideBar from "~/components/Layout/components/Sidebar";
import { useEffect, useState } from 'react';
// import Children from "react";

function DefaultLayout({ children }) {
    const [scripts, setScripts] = useState([]);
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "assets/plugins/global/plugins.bundle.js";
        script.async = true;
        document.body.appendChild(script);
        setScripts([...scripts, script]);
        return () => {
            scripts.forEach((script) => {
                document.body.removeChild(script);
            });
        };
    }, []);
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "assets/js/scripts.bundle.js";
        script.async = true;
        document.body.appendChild(script);
        setScripts([...scripts, script]);
        return () => {
            scripts.forEach((script) => {
                document.body.removeChild(script);
            });
        };
    }, []);

    return (
        <div className="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
            <Header />
            <div className="container">
                <SideBar />
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;