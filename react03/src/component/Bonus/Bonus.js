import { Skeleton } from "@mui/material";
import { useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom/cjs/react-router-dom";

const Bonus = (props) => {
    const match = useRouteMatch();
    const _location = useLocation();
    const _history = useHistory();
    const params = useParams();
    console.log(match, _location, _history, params);
    return (<>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
    </>);
}

export default Bonus;