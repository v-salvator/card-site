import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { hideSecHeader, switchContentType } from "../../reduxStore/cardSlice";
import { CONTENT_TYPE } from "../../consts/contentType";

const BUTTONS = [
  {
    title: CONTENT_TYPE.ALL,
    value: CONTENT_TYPE.ALL,
    icon: undefined,
  },
  {
    title: CONTENT_TYPE.TWEET,
    value: CONTENT_TYPE.TWEET,
    icon: <AiOutlineTwitter></AiOutlineTwitter>,
  },
  {
    title: CONTENT_TYPE.FB,
    value: CONTENT_TYPE.FB,
    icon: <FaFacebookF></FaFacebookF>,
  },
  {
    title: CONTENT_TYPE.IG,
    value: CONTENT_TYPE.IG,
    icon: <FiInstagram></FiInstagram>,
  },
  {
    title: CONTENT_TYPE.YT,
    value: CONTENT_TYPE.YT,
    icon: <FaYoutube></FaYoutube>,
  },
];

const CardSecHeader = () => {
  const cardContentType = useSelector((state) => state.card.contentType);
  const dispatch = useDispatch();
  const onTabClick = (value) => {
    dispatch(switchContentType({ contentType: value }));
  };
  const onHideClick = () => {
    dispatch(hideSecHeader());
  };
  return (
    <div className="card-sec-header">
      <div className="card-sec-header__btn-container">
        {BUTTONS.map((btn) => {
          return (
            <div
              className={classnames({
                "card-sec-header__btn-container__btn": true,
                "card-sec-header__btn-container__btn--select":
                  cardContentType === btn.value,
              })}
              key={btn.value}
              onClick={() => onTabClick(btn.value)}
            >
              {btn.icon ? btn.icon : btn.title}
            </div>
          );
        })}
      </div>
      <div className="card-sec-header__hide-btn" onClick={onHideClick}>
        HIDE
      </div>
    </div>
  );
};

export default CardSecHeader;
