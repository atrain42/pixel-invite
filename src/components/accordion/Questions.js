import SingleQuestion from "./SingleQuestion";

//styles
import classes from "./Question.module.css";

import SectionHeader from "../sectionHeader/SectionHeader";

const questions = [
  {
    id: 2,
    title: "How long does it take to build my site?",
    info: "We ask you to give us 2 - 3 days to complete your site. It is important to us that your site looks nice, so we take our time when completing it.",
  },
  {
    id: 3,
    title: "What information do I provide?",
    info: "Upon confirmation, we will provide you with a form for you to fill out, of information that we recommend you provide to us. Also, it is requested that you send all the pictures that you want on the site.",
  },
  {
    id: 4,
    title: "Does my website stay up forever?",
    info: "We take your website down a week after your baby shower. This prevents the information about your baby shower from living on the internet longer then it needs to.",
  },
  {
    id: 5,
    title: "How does guest RSVP work?",
    info: "When one of your guests fills out the contact form, the information on the form is sent directly to your email. This allows you to easily see who is planning on attending. Please inform us of the email you want to use.",
  },
];

const Questions = () => {
  return (
    <section>
      <SectionHeader 
        subtitle="COMMON QUESTIONS"
        title="We have answers"
        text="Here are anwswers to commonly asked questions."
      />
      <div className={classes.container}>
        {questions.map((question) => {
          return <SingleQuestion key={question.id} {...question} />;
        })}
      </div>
    </section>
  );
};
export default Questions;
