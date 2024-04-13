import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <p className={css.errorMsg}>
      <span className={css.errorIcon}>&#10060;</span> <br />
      Sorry, something went wrong. Try to reload your page!
    </p>
  );
};

export default ErrorMessage;
