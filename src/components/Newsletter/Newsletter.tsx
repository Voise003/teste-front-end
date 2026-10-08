
import { useState } from 'react'
import type { FormEvent } from 'react'
import './Newsletter.scss'

function Newsletter() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [message, setMessage] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!name.trim() || !email.trim()) {
      setMessage('Preencha todos os campos.')
      return
    }

    if (!acceptedTerms) {
      setMessage('Você precisa aceitar os termos e condições.')
      return
    }

    setMessage('Formulário validado com sucesso!')
  }

  return (
    <section className="newsletter" aria-labelledby="newsletter-title">
      <div className="newsletter__container">
        <div className="newsletter__content">
          <h2 id="newsletter-title">
            Inscreva-se na nossa newsletter
          </h2>

          <p>
            Assine a nossa newsletter e receba novidades
            e conteúdos exclusivos da Econverse.
          </p>
        </div>

        <form className="newsletter__form" onSubmit={handleSubmit}>
          <div className="newsletter__fields">
            <label className="newsletter__sr-only" htmlFor="newsletter-name">
              Nome
            </label>

            <input
              id="newsletter-name"
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />

            <label className="newsletter__sr-only" htmlFor="newsletter-email">
              E-mail
            </label>

            <input
              id="newsletter-email"
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />

            <button type="submit">
              INSCREVER
            </button>
          </div>

          <label className="newsletter__terms">
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={(event) =>
                setAcceptedTerms(event.target.checked)
              }
            />

            Aceito os termos e condições
          </label>

          {message && (
            <p className="newsletter__message" role="status">
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Newsletter
