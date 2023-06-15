import {Outlet} from "react-router";
import Navbar from "./components/Navbar";

function App() {


    return (
        <div>
            <Navbar/>
            <Outlet/>
            {/*<h1>Radim</h1>*/}
        </div>
    );
}

export default App;
