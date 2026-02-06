

const FAQ = () => {
    const faqs = [
        {
            question: 'Quand consulter un thérapeute de couple ?',
            answer: "Il n'est jamais trop tôt pour consulter. Que vous traversiez une crise, que vous ayez des difficultés de communication, ou simplement que vous souhaitiez renforcer votre relation, la thérapie peut vous aider. Mieux vaut consulter dès les premiers signes de tension plutôt que d'attendre une situation critique."
        },
        {
            question: 'Est-ce que la thérapie peut sauver tous les couples ?',
            answer: "La thérapie de couple n'a pas pour objectif de maintenir ensemble tous les couples à tout prix. Parfois, elle aide les couples à se retrouver et à reconstruire leur relation. D'autres fois, elle permet de se séparer de manière plus sereine et respectueuse. L'objectif est toujours votre bien-être."
        },
        {
            question: 'Que faire si mon partenaire refuse de consulter ?',
            answer: "Il est préférable que les deux partenaires soient présents, mais si votre conjoint refuse dans un premier temps, vous pouvez commencer seul(e). Parfois, voir votre engagement dans la démarche peut encourager votre partenaire à vous rejoindre."
        },
        {
            question: 'La thérapie est-elle confidentielle ?',
            answer: "Absolument. Tout ce qui est dit en séance reste strictement confidentiel. C'est un espace sûr où vous pouvez vous exprimer librement sans jugement."
        },
        {
            question: 'Combien coûte une séance ?',
            answer: "Pour connaître les tarifs en vigueur, n'hésitez pas à me contacter directement par téléphone ou par email. Je vous fournirai toutes les informations nécessaires."
        },
        {
            question: 'Comment se déroule la première prise de contact ?',
            answer: "Vous pouvez me contacter par téléphone, email ou Instagram. Nous fixerons ensemble un premier rendez-vous qui vous convient. Je répondrai également à toutes vos questions préliminaires."
        }
    ];

    return (
        <section id="faq" className="faq">
            <div className="container">
                <h2 className="section-title">Questions fréquentes</h2>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div key={index} className="faq-item">
                            <h3>{faq.question}</h3>
                            <p>{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
        .faq {
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
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .faq-item {
          background-color: var(--accent);
          padding: 2rem;
          border-radius: var(--radius);
        }
        .faq-item h3 {
          font-size: 1.1rem;
          margin-bottom: 1rem;
          color: var(--primary);
        }
        .faq-item p {
          font-size: 0.95rem;
          color: var(--text-main);
          line-height: 1.6;
        }
      `}</style>
        </section>
    );
};

export default FAQ;
