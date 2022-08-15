import classes from "./RSVP.module.css";

const RSVP = () => {
  return (
    <section className={classes.contact}>
      <h1 className={classes.title}>RSVP</h1>
      <form>
        <div className={classes.detail}>
          <input type="text" name="first_name" placeholder="First Name" />
          <input type="text" name="last_name" placeholder="Last Name" />
          <label for="Are you coming?">Are you coming?</label>
          <select name="Are you coming?">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <textarea placeholder="Message" cols="50" rows="15"></textarea>
      </form>
    </section>
  );
};

export default RSVP;
