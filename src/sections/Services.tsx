

const Services = () => {
    const services = [
        {
            title: 'Thérapie de couple',
            description: 'Accompagnement des couples en difficulté pour :',
            items: [
                'Améliorer la communication',
                'Résoudre les conflits récurrents',
                'Retrouver l\'intimité et la complicité',
                'Traverser une crise',
                'Reconstruire la confiance'
            ]
        },
        {
            title: 'Accompagnement pré-marital',
            description: 'Préparation des couples fiancés pour :',
            items: [
                'Clarifier les attentes mutuelles',
                'Identifier les valeurs communes',
                'Développer des outils de communication',
                'Anticiper les défis potentiels',
                'Construire des fondations solides'
            ]
        },
        {
            title: 'Thérapie brève et ciblée',
            description: 'Approche efficace en 10-12 séances :',
            items: [
                'Focus sur vos objectifs spécifiques',
                'Outils concrets et pratiques',
                'Résultats mesurables',
                'Approche non-jugementale',
                'Liberté de consultation'
            ]
        }
    ];

    return (
        <section id="services" className="services">
            <div className="container">
                <h2 className="section-title">Mes services</h2>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="card service-card">
                            <h3>{service.title}</h3>
                            <p className="service-desc">{service.description}</p>
                            <ul className="service-list">
                                {service.items.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
        .services {
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
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .service-card {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .service-card h3 {
          font-size: 1.25rem;
          margin-bottom: 1.5rem;
          color: var(--secondary);
        }
        .service-desc {
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
          color: var(--text-main);
          font-weight: 500;
        }
        .service-list {
          list-style: none;
          text-align: left;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .service-list li {
          font-size: 0.9rem;
          position: relative;
          padding-left: 1.25rem;
          color: var(--text-main);
        }
        .service-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--primary);
        }
        @media (max-width: 992px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </section>
    );
};

export default Services;
