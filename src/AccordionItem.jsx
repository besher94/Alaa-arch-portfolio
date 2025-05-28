// components/AccordionItem.jsx

const AccordionItem = ({ title, children }) => {
  return (
    <details className="accordion">
      <summary>
        {title}
        <svg className="arrow" viewBox="0 0 24 24">
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </summary>
      <div className="content">{children}</div>
    </details>
  );
};

export default AccordionItem;
