import { useDispatch, useSelector } from "react-redux";
import classes from "../scss/search.module.scss";
import { UTILS } from "../store/actions";
import { utilsSelector } from "../store/selectors";
import { CloseOutlined } from "@ant-design/icons";

const Modal = () => {
  const isShowModalSearch = useSelector(utilsSelector.isShowModalSearch$);

  const dispatch = useDispatch();

  const closeModalSearch = () => {
    dispatch({ type: UTILS.CLOSE_MODAL_SEARCH });
  };

  return (
    <div
      className={`${classes["modal-search"]} ${
        isShowModalSearch ? classes["is-active"] : ""
      }`}
    >
      <div className={classes["close"]} onClick={closeModalSearch}>
        <div className={classes["button-close"]}>
          <CloseOutlined />
        </div>
      </div>
      <div className={classes["search-box"]}>
        <form className={classes["search-form"]}>
          <input type="text" placeholder="Type your keywords" />
          <div className={classes["search-meta"]}>
            <p>Please enter at least 3 characters</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
