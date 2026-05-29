import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useMemo, useState } from 'react'

type Status = 'checking' | 'valid' | 'invalid' | 'done' | 'error'

export const Route = createFileRoute('/unsubscribe')({
  component: UnsubscribePage,
})

function UnsubscribePage() {
  const [status, setStatus] = useState<Status>('checking')
  const [loading, setLoading] = useState(false)
  const token = useMemo(() => {
    if (typeof window === 'undefined') return ''
    return new URLSearchParams(window.location.search).get('token') || ''
  }, [])

  useEffect(() => {
    if (!token) {
      setStatus('invalid')
      return
    }

    fetch(`/email/unsubscribe?token=${encodeURIComponent(token)}`)
      .then(async (response) => {
        if (!response.ok) throw new Error('Invalid token')
        const result = await response.json()
        setStatus(result.valid ? 'valid' : 'done')
      })
      .catch(() => setStatus('invalid'))
  }, [token])

  async function confirmUnsubscribe() {
    setLoading(true)
    try {
      const response = await fetch('/email/unsubscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      })
      if (!response.ok) throw new Error('Unsubscribe failed')
      setStatus('done')
    } catch {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="container-x flex min-h-[70vh] items-center justify-center py-20">
      <div className="max-w-lg rounded-3xl border border-border bg-card p-8 text-center shadow-[var(--shadow-soft)] md:p-10">
        <span className="eyebrow no-line justify-center">ADAB MOVES</span>
        <h1 className="mt-4 text-3xl font-semibold text-foreground">E-mail voorkeuren</h1>
        {status === 'checking' && (
          <p className="mt-4 text-muted-foreground">We controleren je afmeldlink.</p>
        )}
        {status === 'valid' && (
          <>
            <p className="mt-4 text-muted-foreground">
              Bevestig dat je geen app e-mails meer wilt ontvangen.
            </p>
            <button className="btn-primary mt-8" disabled={loading} onClick={confirmUnsubscribe}>
              {loading ? 'Bezig...' : 'Afmelden bevestigen'}
            </button>
          </>
        )}
        {status === 'done' && (
          <p className="mt-4 text-muted-foreground">Je bent afgemeld voor deze e-mails.</p>
        )}
        {status === 'invalid' && (
          <p className="mt-4 text-muted-foreground">Deze afmeldlink is ongeldig of verlopen.</p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-[var(--coral-deep)]">Afmelden is niet gelukt. Probeer het later opnieuw.</p>
        )}
      </div>
    </section>
  )
}