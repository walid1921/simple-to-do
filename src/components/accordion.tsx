import { useState } from "react";
import AccordionItem from "./accordionItem";

const Accordion = ({ accordionItems }) => {
  const [currenOpen, setCurrenOpen] = useState(null);

  return (
    <>
      {accordionItems.map((accordion) => (
        <AccordionItem
          currenOpen={currenOpen}
          setCurrenOpen={setCurrenOpen}
          key={accordion.id}
          id={accordion.id}
          title={accordion.title}
        >
          {accordion.content}{" "}
        </AccordionItem>
      ))}
      <AccordionItem
        title="test"
        currenOpen={currenOpen}
        setCurrenOpen={setCurrenOpen}
        id={11}
      >
        test
      </AccordionItem>
    </>
  );
};

export default Accordion;
