import React, {Suspense, lazy, useEffect} from "react";
// import ProfileContainer from "./components/Profile/ProfileContainer.jsx";
import './index.css';
import { Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavBarConatainer from "./components/Navbar/NavbarConatainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./Login/Login.jsx";
import {connect} from "react-redux";
import {initializeApp} from "../src/redux/app-reducer";
import { compose } from "redux";
import Preloader from "./components/common/preloader/preloader.jsx";
import withRouter from "./WithRouter.jsx";

const DialogsContainer = lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = lazy(() => import("./components/Profile/ProfileContainer.jsx"));

class App extends React.Component {


    componentDidMount() {
        this.props.initializeApp();
    }
    render () {
        if(!this.props.initialized){
            return <Preloader/> 
        }
        

        return (
                <div className="app-wrapper">
                    <HeaderContainer />
                    <NavBarConatainer />
                    <div className="app-wrapper-content">
                        <Suspense fallback={<Preloader/> }>
                            <Routes>
                                <Route path="/dialogs/" element= {<DialogsContainer  />}/>
                                <Route path="/profile/:userId?" element={<ProfileContainer />}/>
                                <Route path="/news" element={<News />}/>
                                <Route path="/settings" element={<Settings />}/>
                                <Route path="/music" element={<Music />}/>
                                <Route path="/users" element={<UsersContainer />}/>
                                <Route path="/login" element={<LoginPage />}/>
                            </Routes>
                        </Suspense>
                    </div>
                </div>
            );
    }
   
}

let mapStateToProps = (state) => ({
    initialized: state.appReducer.initialized
})


export default compose(
    connect(mapStateToProps, {initializeApp}),
    withRouter,
)(App)

