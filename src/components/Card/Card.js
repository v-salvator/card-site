import { useSelector } from "react-redux";
import { CardHeader, CardFooter, CardSecHeader, TermsContent } from "./index";
import terms from "./terms.json";

const Card = () => {
  const { isSecHeaderVisible, contentType } = useSelector(
    (state) => state.card
  );
  console.log("contentType", contentType);
  return (
    <div className="card">
      <CardHeader></CardHeader>
      {isSecHeaderVisible && <CardSecHeader></CardSecHeader>}
      <div className="card__content">
        {contentType === "ALL" && <TermsContent terms={terms}></TermsContent>}
      </div>
      <CardFooter></CardFooter>
    </div>
  );
};

export default Card;
