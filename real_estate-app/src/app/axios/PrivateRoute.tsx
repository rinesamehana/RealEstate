import { Redirect, Route, RouteComponentProps, RouteProps } from "react-router-dom";
import { useStore } from "../stores/store";
interface Props extends RouteProps{
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}
export default function PrivateRoute({component: Component, ...rest}: Props){
    const {userStore:{isLoggedIn, isLoggedInAsAdmin}}=useStore();

    return (
        <Route {...rest} 
        render={(props)=> isLoggedIn && isLoggedInAsAdmin ? <Component {...props}/> : <Redirect to='/' />}
        />

       
    )

}