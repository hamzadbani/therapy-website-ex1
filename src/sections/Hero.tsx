

const Hero = () => {
    return (
        <section id="about" className="hero">
            <div className="container">
                <h1 className="hero-title">Pourquoi la thérapie de couple ?</h1>

                <div className="quote-box">
                    <p>
                        « J'ai été biberonnée aux comédies romantiques et aux contes de fées. Comme beaucoup de jeunes filles de ma génération, j'étais amoureuse de l'amour. Les choses semblaient simples : on rencontrait quelqu'un, on tombait amoureux et on vivait heureux. »
                    </p>
                </div>

                <div className="hero-content">
                    <p>
                        Je n'étais pas stupide, je savais qu'il y aurait des obstacles, des crises... Mais à la fin, l'amour triomphe toujours ! C'est ce que j'avais appris auprès de Cendrillon et de Maria (La mélodie du bonheur).
                    </p>
                    <p>
                        Deux décennies plus tard, je me retrouve en plein tsunami conjugal (pas du tout prévu dans le plan de vie) à la recherche d'un thérapeute pour sauver mon couple. J'étais en train de finir ma formation de thérapeute ACT (Approche centrée sur la personne de Carl Rogers) et j'étais convaincue par la démarche thérapeutique. Pourtant, il était trop tard, mon couple s'était brisé.
                    </p>
                    <p>
                        J'aime le couple. J'ai une affection particulière pour vous qui venez me consulter. Je me sens honorée que vous partagiez avec moi votre intimité. Je suis admirative de l'énergie que vous mettez à rester ensemble.
                    </p>
                </div>
            </div>
            <style>{`
        .hero {
          padding-top: 4rem;
          padding-bottom: 2rem;
          text-align: center;
        }
        .hero-title {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          position: relative;
          display: inline-block;
        }
        .hero-title::after {
          content: '';
          position: absolute;
          bottom: -1rem;
          left: 0;
          width: 100%;
          height: 1px;
          background: var(--border);
        }
        .quote-box {
          background-color: var(--accent);
          padding: 2.5rem;
          border-radius: var(--radius);
          margin-bottom: 3rem;
          font-style: italic;
          color: var(--secondary);
          line-height: 1.8;
          font-size: 1.1rem;
          text-align: left;
          position: relative;
        }
        .hero-content {
          text-align: left;
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          color: var(--text-main);
          font-size: 1.05rem;
        }
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }
          .quote-box {
            padding: 1.5rem;
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;
