import { UTILS } from "../actions";

const initState = {
  isShowModalSearch: false,
  isShowExtraDropdown: false,
  isShowMenuDropdown: false,
};

const modalReducer = (state = initState, action) => {
  switch (action.type) {
    case UTILS.OPEN_MODAL_SEARCH: {
      return {
        ...state,
        isShowModalSearch: true,
      };
    }
    case UTILS.CLOSE_MODAL_SEARCH: {
      return {
        ...state,
        isShowModalSearch: false,
      };
    }
    case UTILS.TOGGLE_EXTRA_DROPDOWN: {
      return {
        ...state,
        isShowExtraDropdown: !state.isShowExtraDropdown,
      };
    }
    case UTILS.TOGGLE_MENU_DROPDOWN: {
      return {
        ...state,
        isShowMenuDropdown: !state.isShowMenuDropdown,
      };
    }
    case UTILS.CLOSE_DROPDOWN: {
      return {
        ...state,
        isShowMenuDropdown: false,
        isShowExtraDropdown: false,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default modalReducer;
