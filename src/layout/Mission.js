//images
import paint from "../images/paint.png";

//styles
import "./Mission.css";

const Mission = () => {
  return (
    <section className="mission">
      <div className="mission-text">
        <h1>Our Mission</h1>
        <p>
          At Pixel Invite, we create elegant web designs that help advertise
          your baby shower. Our sites allow guests to RSVP and contain
          information about your registry; lifting some weight off your
          shoulders when you are planning your baby shower.
        </p>
      </div>
      <img src={paint} alt="paint graphic" />
    </section>
  );
};

export default Mission;
