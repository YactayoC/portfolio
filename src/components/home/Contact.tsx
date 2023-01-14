import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';

import { en, es } from '@/i18n';
import { isEmail, isName, sendEmail } from '@/utils';
import { useLang } from '@/hooks';
import styles from '@/styles/Contact.module.css';
import 'react-toastify/dist/ReactToastify.css';

interface DataContact {
  email: string;
  name: string;
  message: string;
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DataContact>();
  const { isLangSpanish } = useLang();

  const onSendEmail = async ({ email, name, message }: DataContact) => {
    await sendEmail({ email, name, message })
      .then(() => notify(isLangSpanish ? es.contact.sendSuccessfull : en.contact.sendSuccessfull))
      .catch(() => notify(isLangSpanish ? es.contact.sendError : en.contact.sendError));
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
      <h2> {isLangSpanish ? es.contact.title : en.contact.title}</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSendEmail)}>
        <div className={styles['form__group-inputs']}>
          <div className={styles.form__group}>
            <label className={styles.form__label} htmlFor="name">
              {isLangSpanish ? es.contact.name : en.contact.name}
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
              {isLangSpanish ? es.contact.email : en.contact.email}
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
            {isLangSpanish ? es.contact.message : en.contact.message}
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
          {isLangSpanish ? es.contact.button : en.contact.button} <i className="fa-solid fa-paper-plane"></i>
        </button>
      </form>
    </section>
  );
};

export default Contact;
