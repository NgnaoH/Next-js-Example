import Image from "next/image";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import classes from "../scss/header.module.scss";
import { useDispatch, useSelector } from "react-redux";
import ModalSearch from "./ModalSearch";
import Dropdown from "./Dropdown";
import { UTILS } from "../store/actions";
import Trans from "next-translate/Trans";
import { useRouter } from "next/router";
import {
  EllipsisOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { utilsSelector } from "../store/selectors";
import { useEffect } from "react";

const Header = () => {
  let { t } = useTranslation();

  const dispatch = useDispatch();

  const isShowExtraDropdown = useSelector(utilsSelector.isShowExtraDropdown$);
  const isShowMenuDropdown = useSelector(utilsSelector.isShowMenuDropdown$);

  const router = useRouter();

  const openModalSearch = () => {
    dispatch({ type: UTILS.OPEN_MODAL_SEARCH });
  };

  const toggleExtraDropdown = () => {
    dispatch({ type: UTILS.TOGGLE_EXTRA_DROPDOWN });
  };

  const toggleMenuDropdown = () => {
    dispatch({ type: UTILS.TOGGLE_MENU_DROPDOWN });
  };

  return (
    <header className={`${classes["header"]} container`}>
      <div className={classes["header-wrapper"]}>
        <nav className={classes["navbar-left"]}>
          <ul>
            <li>
              <Link href="/" passHref>
                <a
                  className={`text-hover ${
                    router.pathname == "/" ? "active" : ""
                  }`}
                >
                  <Trans
                    i18nKey="common:header.home"
                    components={[<span key="" className="effect"></span>]}
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/membership">
                <a
                  className={`text-hover ${
                    router.pathname == "/membership" ? "active" : ""
                  }`}
                >
                  <Trans
                    i18nKey="common:header.membership"
                    components={[<span key="" className="effect"></span>]}
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="text-hover">
                  <Trans
                    i18nKey="common:header.style-guide"
                    components={[<span key="" className="effect"></span>]}
                  />
                </a>
              </Link>
            </li>
            <li className={classes["button-dropdown"]}>
              <EllipsisOutlined onClick={toggleExtraDropdown} />
              <Dropdown isShow={isShowExtraDropdown}>
                <nav className={classes["menu-extra"]}>
                  <ul className="menu">
                    <li className="item">
                      <Link href="#" passHref>
                        <a className="text-hover">
                          <Trans
                            i18nKey="common:header.features"
                            components={[
                              <span key="" className="effect"></span>,
                            ]}
                          />
                        </a>
                      </Link>
                    </li>
                    <li className="item">
                      <Link href="#" passHref>
                        <a className="text-hover">
                          <Trans
                            i18nKey="common:header.authors"
                            components={[
                              <span key="" className="effect"></span>,
                            ]}
                          />
                        </a>
                      </Link>
                    </li>
                    <li className="item">
                      <Link href="#" passHref>
                        <a className="text-hover">
                          <Trans
                            i18nKey="common:header.tags"
                            components={[
                              <span key="" className="effect"></span>,
                            ]}
                          />
                        </a>
                      </Link>
                    </li>
                    <li className="item">
                      <Link href="#" passHref>
                        <a className="text-hover">
                          <Trans
                            i18nKey="common:header.subscribe"
                            components={[
                              <span key="" className="effect"></span>,
                            ]}
                          />
                        </a>
                      </Link>
                    </li>
                    <li className="item">
                      <Link href="#" passHref>
                        <a className="text-hover">
                          <Trans
                            i18nKey="common:header.contact"
                            components={[
                              <span key="" className="effect"></span>,
                            ]}
                          />
                        </a>
                      </Link>
                    </li>
                    <li className="item">
                      <Link href="#" passHref>
                        <a className="text-hover">
                          <Trans
                            i18nKey="common:header.get-theme"
                            components={[
                              <span key="" className="effect"></span>,
                            ]}
                          />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </Dropdown>
            </li>
          </ul>
        </nav>
        <div className={classes["navbar-center"]}>
          <Link href="/" passHref>
            <a className={classes["logo"]}>
              <Image
                alt="logo"
                src="https://okiro.fueko.net/content/images/2020/11/okiro.svg"
                layout="fill"
                objectFit="cover"
              />
            </a>
          </Link>
        </div>
        <nav className={classes["navbar-right"]}>
          <ul>
            <li className={classes["button-search"]} onClick={openModalSearch}>
              <SearchOutlined />
            </li>
            <li>
              <Link href="/sign-in">
                <a
                  className={`text-hover ${
                    router.pathname == "/sign-in" ? "active" : ""
                  }`}
                >
                  <Trans
                    i18nKey="common:header.sign-in"
                    components={[<span key="" className="effect"></span>]}
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/sign-up" passHref>
                <a className={classes["button-sign-up"]}>
                  {t("common:header.sign-up")}
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={classes["navbar-mobile"]}>
          <MenuOutlined onClick={toggleMenuDropdown} />
          <Dropdown isShow={isShowMenuDropdown} className="menu-mobile">
            <nav className={classes["navbar"]}>
              <ul>
                <li>
                  <Link href="/" passHref>
                    <a
                      className={`text-hover ${
                        router.pathname == "/" ? "active" : ""
                      }`}
                    >
                      <Trans
                        i18nKey="common:header.home"
                        components={[<span key="" className="effect"></span>]}
                      />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/membership">
                    <a
                      className={`text-hover ${
                        router.pathname == "/membership" ? "active" : ""
                      }`}
                    >
                      <Trans
                        i18nKey="common:header.membership"
                        components={[<span key="" className="effect"></span>]}
                      />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="text-hover">
                      <Trans
                        i18nKey="common:header.style-guide"
                        components={[<span key="" className="effect"></span>]}
                      />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#" passHref>
                    <a className="text-hover">
                      <Trans
                        i18nKey="common:header.features"
                        components={[<span key="" className="effect"></span>]}
                      />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#" passHref>
                    <a className="text-hover">
                      <Trans
                        i18nKey="common:header.authors"
                        components={[<span key="" className="effect"></span>]}
                      />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#" passHref>
                    <a className="text-hover">
                      <Trans
                        i18nKey="common:header.tags"
                        components={[<span key="" className="effect"></span>]}
                      />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#" passHref>
                    <a className="text-hover">
                      <Trans
                        i18nKey="common:header.subscribe"
                        components={[<span key="" className="effect"></span>]}
                      />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#" passHref>
                    <a className="text-hover">
                      <Trans
                        i18nKey="common:header.contact"
                        components={[<span key="" className="effect"></span>]}
                      />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#" passHref>
                    <a className="text-hover">
                      <Trans
                        i18nKey="common:header.get-theme"
                        components={[<span key="" className="effect"></span>]}
                      />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/sign-in">
                    <a
                      className={`text-hover ${
                        router.pathname == "/sign-in" ? "active" : ""
                      }`}
                    >
                      <Trans
                        i18nKey="common:header.sign-in"
                        components={[<span key="" className="effect"></span>]}
                      />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/sign-up" passHref>
                    <a className={classes["button-sign-up"]}>
                      {t("common:header.sign-up")}
                    </a>
                  </Link>
                </li>
                <li className={classes["button-search"]}>
                  <p onClick={openModalSearch}>
                    {t("common:header.search")} <SearchOutlined />
                  </p>
                </li>
              </ul>
            </nav>
          </Dropdown>
        </div>
      </div>
      <ModalSearch />
    </header>
  );
};

export default Header;
