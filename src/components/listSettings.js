import "../styles/components/listSettings.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { closeSettings } from "../store/Actions";

export const ListSettings = () => {
    const dispatch = useDispatch();

    const settingsStatus = useSelector(
        (rootReducer) => rootReducer.listSettingsReducer
    );

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
                    <form action="#">
                        <input type="text" />
                    </form>

                    <div className="list_delete_btn">Delete list</div>
                </div>

                <div className="change_list_name_btn">Change name</div>
            </div>
        </div>
    );
};
