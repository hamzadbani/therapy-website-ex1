

const Process = () => {
    const steps = [
        {
            number: 1,
            title: 'Première séance (environ 1h30)',
            description: 'Je reçois les deux conjoints ensemble. Cette séance me permet de faire connaissance avec vous individuellement, puis de m\'intéresser à votre vie en tant que couple. C\'est un moment d\'écoute et d\'observation où nous établirons ensemble les objectifs de la thérapie.'
        },
        {
            number: 2,
            title: 'Séances suivantes (format standard)',
            description: 'Les séances suivantes sont sensiblement plus courtes mais se font toujours à trois. Il est très rare que je prenne individuellement les conjoints, et même si c\'est le cas, c\'est en général pour une seule séance. L\'objectif est de travailler ensemble sur votre relation.'
        },
        {
            number: 3,
            title: 'Durée de la thérapie',
            description: 'La thérapie de couple est une thérapie brève, elle dure rarement plus de 10 ou 12 séances. Chaque couple est unique : parfois une seule séance peut suffire à remettre certains sujets "sur les rails", parfois il faut aller plus en profondeur. Ma porte reste toujours ouverte si vous souhaitez revenir ultérieurement.'
        }
    ];

    return (
        <section id="process" className="process">
            <div className="container">
                <h2 className="section-title">Comment se déroule une thérapie ?</h2>

                <div className="steps-list">
                    {steps.map((step) => (
                        <div key={step.number} className="step-item">
                            <div className="step-number">{step.number}</div>
                            <div className="step-content">
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="cta-box card">
                    <h3>Prêt à faire le premier pas ?</h3>
                    <p>Consulter un thérapeute de couple n'est pas un signe d'échec, c'est un acte de courage et d'engagement envers votre relation.</p>
                    <a href="#contact" className="btn-primary">Prendre rendez-vous</a>
                </div>
            </div>
            <style>{`
        .process {
          background-color: var(--background);
          padding-top: 2rem;
        }
        .section-title {
          font-size: 2rem;
          margin-bottom: 3rem;
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
        .steps-list {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          margin-bottom: 5rem;
          max-width: 1100px;
        }
        .step-item {
          display: flex;
          gap: 2rem;
        }
        .step-number {
          border: 2px solid var(--primary);
          color: var(--primary);
          background-color: transparent;
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          flex-shrink: 0;
          font-size: 1.2rem;
        }
        .step-content h3 {
          font-size: 1.1rem;
          margin-bottom: 0.75rem;
          color: var(--primary);
        }
        .step-content p {
          font-size: 0.95rem;
          color: var(--text-main);
          line-height: 1.6;
        }
        .cta-box {
          background-color: var(--secondary);
          color: white;
          padding: 3rem;
          text-align: center;
          border-radius: var(--radius);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          border: none;
        }
        .cta-box h3 {
          color: white;
          font-size: 1.8rem;
          font-family: var(--font-serif);
        }
        .cta-box p {
          font-size: 1rem;
          max-width: 600px;
          opacity: 0.9;
        }
        .cta-box .btn-primary {
          background-color: white;
          color: var(--secondary);
          margin-top: 1rem;
          padding: 1rem 2.5rem;
        }
        .cta-box .btn-primary:hover {
          background-color: var(--primary-light);
        }
        @media (max-width: 768px) {
          .step-item {
            flex-direction: column;
            gap: 1rem;
          }
          .cta-box {
            padding: 2rem;
          }
        }
      `}</style>
        </section>
    );
};

export default Process;
