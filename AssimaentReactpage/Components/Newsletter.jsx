const Newsletter = ({ placeholderName, placeholderEmail, buttonText }) => (
  <section>
    <h2>Subscribe to our newsletter</h2>
    <form>
      <input type="text" placeholder={placeholderName} />
      <input type="email" placeholder={placeholderEmail} />
      <button>{buttonText}</button>
    </form>
  </section>
);

export default Newsletter;