import { useState } from "react";

const initialValues = { name: "", email: "", message: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Escribe tu nombre.";
  if (!values.email.trim()) errors.email = "Escribe tu correo.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Ingresa un correo con formato válido.";
  }
  if (!values.message.trim()) errors.message = "Escribe un mensaje.";
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setStatus("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("Revisa los campos marcados antes de continuar.");
      event.currentTarget.elements.namedItem(Object.keys(nextErrors)[0]).focus();
      return;
    }
    setStatus(`¡Gracias, ${values.name.trim()}! Tu mensaje pasó la validación. Envío de demostración completado.`);
    setValues(initialValues);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate aria-describedby="form-note">
      <div className="form-field">
        <label htmlFor="contact-name">Nombre <span aria-hidden="true">*</span></label>
        <input id="contact-name" name="name" value={values.name} onChange={handleChange} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} autoComplete="name" required />
        {errors.name && <small className="field-error" id="name-error">{errors.name}</small>}
      </div>
      <div className="form-field">
        <label htmlFor="contact-email">Correo electrónico <span aria-hidden="true">*</span></label>
        <input id="contact-email" name="email" type="email" value={values.email} onChange={handleChange} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} autoComplete="email" required />
        {errors.email && <small className="field-error" id="email-error">{errors.email}</small>}
      </div>
      <div className="form-field">
        <label htmlFor="contact-message">Mensaje <span aria-hidden="true">*</span></label>
        <textarea id="contact-message" name="message" rows="5" value={values.message} onChange={handleChange} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} required />
        {errors.message && <small className="field-error" id="message-error">{errors.message}</small>}
      </div>
      <button className="button button-primary" type="submit">Enviar mensaje <span aria-hidden="true">↗</span></button>
      <p className="form-note" id="form-note">Demostración académica: valida los datos y simula el envío. Para escribir de verdad, usa mi enlace de correo.</p>
      <p className="form-status" role="status" aria-live="polite" aria-atomic="true">{status}</p>
    </form>
  );
}
