import FaqList from "./Faqlist";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import "./faq.css";

const FaqContainer = () => {
  return (
    <div className="container lg:flex lg:flex-col lg:items-start lg:justify-start lg:text-[14px]    lg:leading-[27.5px] ">
      {FaqList.map((list) => (
        <div className="lg:w-[100%]    ">
          <Accordion className="text-left   ">
            <AccordionSummary
              className="flex    flex-col items-center justify-center lg:items-start lg:justify-start    "
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="question leading-[18px] text-[12px]  text-white bg-transparent    ">
                {list.question}
              </Typography>
              <AddIcon className="flex items-center justify-end" />
            </AccordionSummary>

            <AccordionDetails>
              <Typography>{list.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default FaqContainer;
