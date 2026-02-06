

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <p>© 2026 Sarah Mansouri - Thérapeute de Couple Certifiée | Casablanca, Maroc</p>
                <p className="footer-small">Tous droits réservés | Confidentialité garantie</p>
            </div>
            <style>{`
        .footer {
          background-color: #1e293b; /* Dark Navy/Blue as in image */
          color: white;
          padding: 2.5rem 0;
          text-align: center;
        }
        .footer-content {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .footer p {
          font-size: 0.9rem;
          opacity: 0.9;
        }
        .footer-small {
          font-size: 0.75rem !important;
          opacity: 0.7 !important;
        }
      `}</style>
        </footer>
    );
};

export default Footer;
