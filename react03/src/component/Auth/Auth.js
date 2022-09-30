import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const Auth = (props) => {
    const { children, ...rest } = props;

    const { isLogged } = useSelector(state => state.member);

    console.log(isLogged);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isLogged ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login-out",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default Auth;