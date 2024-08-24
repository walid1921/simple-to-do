const AccordionItem = ({ title, id, currenOpen, setCurrenOpen, children }) => {
  const isOpen = currenOpen === id;

  const handleOpen = () => {
    setCurrenOpen(id);
  };

  return (
    <div onClick={handleOpen}>
      <h3>{title}</h3>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default AccordionItem;
