import { Phone, Mail, Instagram, MapPin } from 'lucide-react';

const Contact = () => {
    const contactInfo = [
        {
            icon: <Phone size={24} />,
            label: 'Téléphone',
            value: '06.61.37.81.97'
        },
        {
            icon: <Mail size={24} />,
            label: 'Email',
            value: 'sarah.mansouri@email.com'
        },
        {
            icon: <Instagram size={24} />,
            label: 'Instagram',
            value: '@sarah.therapie'
        },
        {
            icon: <MapPin size={24} />,
            label: 'Adresse',
            value: 'Lotissement Anset Lakbir, Immeuble 16 La Noble, Étage 5, Appartement 03, Casablanca'
        }
    ];

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">Me contacter</h2>
                <p className="contact-intro">N'hésitez pas à me contacter pour toute question ou pour prendre rendez-vous. Je vous répondrai dans les plus brefs délais.</p>

                <div className="contact-grid">
                    {contactInfo.map((info, index) => (
                        <div key={index} className="card contact-card">
                            <div className="contact-icon">{info.icon}</div>
                            <h3>{info.label}</h3>
                            <p>{info.value}</p>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
        .contact {
          background-color: var(--surface);
          padding-top: 4rem;
        }
        .section-title {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          position: relative;
          display: inline-block;
          color: var(--secondary);
        }
        .section-title::after {
          content: '';
          position: absolute;
          bottom: -0.5rem;
          left: 0;
          width: 100%;
          height: 1px;
          background: var(--border);
        }
        .contact-intro {
          margin-bottom: 3.5rem;
          color: var(--text-main);
          font-size: 1rem;
          max-width: 1000px;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .contact-card {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          border-color: var(--primary);
        }
        /* Make address card span 1 column or handle its width */
        .contact-card:last-child {
          grid-column: 1 / span 1;
        }
        .contact-icon {
          color: var(--primary);
          margin-bottom: 1.5rem;
        }
        .contact-card h3 {
          font-size: 1.1rem;
          margin-bottom: 1rem;
          color: var(--secondary);
        }
        .contact-card p {
          font-size: 0.95rem;
          color: var(--text-main);
          line-height: 1.5;
        }
        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
           .contact-card:last-child {
            grid-column: span 1;
          }
        }
      `}</style>
        </section>
    );
};

export default Contact;
