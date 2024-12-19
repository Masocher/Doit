import { useParams } from "react-router-dom";
import { TodoPannel } from "../components/todoPannel";

export const List = () => {
    let { listUrlSlug } = useParams();

    return (
        <div className="list_container">
            <TodoPannel status="list" />
        </div>
    );
};
