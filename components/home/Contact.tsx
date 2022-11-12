import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';

import { isEmail, isName, sendEmail } from 'utils';
import styles from 'styles/Contact.module.css';
import 'react-toastify/dist/ReactToastify.css';

interface DataContact {
  email: string;
  name: string;
  message: string;
}

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<DataContact>();

  const onSendEmail = async ({ email, name, message }: DataContact) => {
    await sendEmail({ email, name, message })
      .then(() => notify('Email sent successfully'))
      .catch(() => notify('Error sending email'));
    reset();
  };

  const notify = (msg: string) => {
    toast.success(msg, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'colored',
      progress: undefined,
    });
  };

  return (
    <section id="contact" className={styles.contact}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <h2>CONTACT ME</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSendEmail)}>
        <div className={styles['form__group-inputs']}>
          <div className={styles.form__group}>
            <label className={styles.form__label} htmlFor="name">
              Name
            </label>
            <input
              id="name"
              className={styles.form__input}
              type="text"
              placeholder=" "
              {...register('name', {
                required: 'Your name is required',
                minLength: { value: 6, message: 'Minimum 6 characters' },
                validate: isName,
              })}
            />
            {errors.name && <p className={styles.form__error}>{errors.name.message}</p>}
          </div>

          <div className={styles.form__group}>
            <label className={styles.form__label} htmlFor="email">
              Email
            </label>
            <input
              id="email"
              className={styles.form__input}
              type="email"
              placeholder=" "
              {...register('email', {
                required: 'Your email is required',
                validate: isEmail,
              })}
            />
            {errors.email && <p className={styles.form__error}>{errors.email.message}</p>}
          </div>
        </div>

        <div className={styles.form__group}>
          <label className={styles.form__label} htmlFor="message">
            Message
          </label>
          <textarea
            className={styles.form__textarea}
            placeholder=" "
            id="message"
            cols={30}
            rows={5}
            {...register('message', {
              required: 'This message is required',
              minLength: { value: 6, message: 'Minimum 6 characters' },
              maxLength: { value: 250, message: 'Maximum 250 characters' },
            })}
          ></textarea>
          {errors.message && <p className={styles.form__error}>{errors.message.message}</p>}
        </div>

        <button type="submit">
          Send Message <i className="fa-solid fa-paper-plane"></i>
        </button>
      </form>
    </section>
  );
};

export default Contact;
