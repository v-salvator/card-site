import { Progressbar } from "../index";

const TermsContent = ({ terms }) => {
  return (
    <div className="terms-content">
      <div className="terms-content__title">TOP TERMS</div>
      <TermHead></TermHead>
      {terms.map((term) => {
        return <TermRow key={term.name} term={term}></TermRow>;
      })}
    </div>
  );
};

export default TermsContent;

const TermHead = () => {
  return (
    <div className="terms-content__head">
      <div>TERMS</div>
      <div>% OF TOTAL POSTS</div>
      <div># OF POSTS</div>
    </div>
  );
};

const TermRow = ({ term }) => {
  return (
    <div className="terms-content__row">
      <div>{term.name}</div>
      <div>
        <Progressbar value={term.count}></Progressbar>
      </div>
      <div>{term.count}</div>
    </div>
  );
};
