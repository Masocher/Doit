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
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ListSettings = ({ updateLists, updateListsTasks }) => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const settingsStatus = useSelector(
        (rootReducer) => rootReducer.listSettingsReducer
    );

    const selectedList = useSelector(
        (rootReducer) => rootReducer.selectListReducer
    );

    const listName = useSelector(
        (rootReducer) => rootReducer.changeNameListReducer
    );

    let [listNameState, setListNameState] = useState(listName);

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
                            value={listNameState}
                            onChange={(e) => {
                                dispatch(changeNameList(e.target.value));
                                setListNameState(e.target.value);
                            }}
                        />
                    </form>

                    <div
                        className="list_delete_btn"
                        onClick={() => {
                            dispatch(deleteList(selectedList));
                            dispatch(closeSettings());
                            updateLists();
                            updateListsTasks();
                            navigate("/");
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
                        setListNameState("");
                        updateLists();
                    }}
                >
                    Change name
                </div>
            </div>
        </div>
    );
};
