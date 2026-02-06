

const Certifications = () => {
    const certifications = [
        {
            title: 'Thérapeute ACP certifié',
            description: 'Institut Marocain de Psychothérapie Relationnelle (IMPR). Approche Centrée sur la Personne de Carl Rogers.'
        },
        {
            title: 'Thérapeute de couple systémique',
            description: 'IFATC de Lyon. Institut de Formation et d\'Application des Thérapies de la Communication.'
        },
        {
            title: 'Thérapie conjugale positive',
            description: 'Formation auprès d\'Yvon Dallaire. Approche centrée sur les forces du couple.'
        },
        {
            title: 'Méthode Gottman',
            description: 'Formation certifiée. Approche scientifique de la thérapie de couple, basée sur 40 ans de recherches.'
        }
    ];

    return (
        <section className="certifications">
            <div className="container">
                <h2 className="section-title">Mes formations et certifications</h2>
                <p className="section-intro">Pour vous être utile, vous qui me faites confiance, j'ai multiplié les formations pour avoir un maximum d'outils pour vous aider :</p>

                <div className="cert-grid">
                    {certifications.map((cert, index) => (
                        <div key={index} className="card cert-card">
                            <h3>{cert.title}</h3>
                            <p>{cert.description}</p>
                        </div>
                    ))}
                </div>

                <p className="cert-outro">Et évidemment je n'ai pas l'intention de m'arrêter en si bon chemin : quand on aime on ne compte pas !</p>
            </div>
            <style>{`
        .certifications {
          padding-top: 2rem;
          background-color: var(--background);
        }
        .section-title {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          text-align: left;
        }
        .section-intro {
          margin-bottom: 3rem;
          color: var(--text-main);
          font-size: 1rem;
        }
        .cert-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-bottom: 3rem;
        }
        .cert-card {
          padding: 2rem;
          background: #f1f5f9; /* Subtle gray background for cards as in image */
          border: none;
        }
        .cert-card h3 {
          font-size: 1.1rem;
          color: var(--primary);
          margin-bottom: 1rem;
        }
        .cert-card p {
          font-size: 0.95rem;
          color: var(--text-main);
          line-height: 1.5;
        }
        .cert-outro {
          font-style: italic;
          color: var(--text-main);
          font-size: 1rem;
          margin-top: 2rem;
        }
        @media (max-width: 768px) {
          .cert-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </section>
    );
};

export default Certifications;
