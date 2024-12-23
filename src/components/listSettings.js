import "../styles/components/listSettings.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
    closeSettings,
    deleteList,
    changeNameList,
    renameList,
} from "../store/Actions";

export const ListSettings = () => {
    const dispatch = useDispatch();

    const settingsStatus = useSelector(
        (rootReducer) => rootReducer.listSettingsReducer
    );

    const selectedList = useSelector(
        (rootReducer) => rootReducer.selectListReducer
    );
    console.log(selectedList);

    const listName = useSelector(
        (rootReducer) => rootReducer.changeNameListReducer
    );
    console.log(listName);

    return (
        <div className={`settings_container ${settingsStatus ? "show" : ""}`}>
            <div className="list_information">
                <div
                    className="list_close_btn"
                    onClick={() => dispatch(closeSettings())}
                >
                    <FontAwesomeIcon icon={faClose} />
                </div>

                <div className="list_settings_title">Change list name</div>

                <div className="list_settings_bottom_section">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="text"
                            value={listName}
                            onChange={(e) =>
                                dispatch(changeNameList(e.target.value))
                            }
                        />
                    </form>

                    <div
                        className="list_delete_btn"
                        onClick={() => {
                            dispatch(deleteList(selectedList));
                            dispatch(closeSettings());
                            window.location.replace("/");
                        }}
                    >
                        Delete list
                    </div>
                </div>

                <div
                    className="change_list_name_btn"
                    onClick={() => {
                        dispatch(renameList(selectedList, listName));
                        dispatch(closeSettings());
                    }}
                >
                    Change name
                </div>
            </div>
        </div>
    );
};
