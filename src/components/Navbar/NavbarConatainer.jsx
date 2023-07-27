import NavBar from "./Navbar";
import { connect } from "react-redux";

let mapStateToProps = (state) =>{
    return {
        sidebar: state.sidebarReducer.sidebar,
        follow: state.usersReducer.users
    }
}
const NavBarConatainer = connect (mapStateToProps) (NavBar)

export default NavBarConatainer;































