
const TopBanner = () => {
    return (
        <div className="top-banner">
            <div className="container banner-content">
                <h1>Sarah Mansouri</h1>
                <p>Thérapeute de Couple Certifiée | Casablanca</p>
            </div>
            <style>{`
        .top-banner {
          background: linear-gradient(135deg, #527853 0%, #2c3333 100%);
          color: white;
          padding: 4rem 0;
          text-align: center;
        }
        .banner-content h1 {
          color: white;
          font-size: 3rem;
          margin-bottom: 0.5rem;
          font-family: var(--font-serif);
        }
        .banner-content p {
          font-size: 1.1rem;
          opacity: 0.9;
          font-weight: 500;
        }
        @media (max-width: 768px) {
          .banner-content h1 {
            font-size: 2rem;
          }
          .banner-content p {
            font-size: 0.9rem;
          }
        }
      `}</style>
        </div>
    );
};

export default TopBanner;
