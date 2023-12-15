//components
import Alerts from "../components/alert/Alerts";
import SectionHeader from '../components/sectionHeader/SectionHeader'


const Info = () => {
  return (
    <section>
      <SectionHeader 
        subtitle="WARM WELCOME"
        title="Invites made simple"
        text="Just share the link to your site and guests can RSVP. No need to worry about collecting addresses
        and mailing out invitations.
        "
      />
      <Alerts />
    </section>
  );
};

export default Info;
