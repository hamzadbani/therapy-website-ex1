

const Testimonials = () => {
    const testimonials = [
        {
            text: "Même après peu de séances, son aide a été précieuse. Très professionnelle, à l'écoute et directe quand il le faut, elle sait parfaitement encadrer les échanges de couple. Je recommande sincèrement à tous les couples qui souhaitent avancer ensemble avec l'aide d'une vraie professionnelle !"
        },
        {
            text: "Je recommande vivement Sarah pour toute personne à la recherche d'une psychologue bienveillante, à l'écoute et profondément humaine. Dès les premières séances, je me suis sentie en confiance sans jugement. Elle a su m'accompagner avec beaucoup de justesse, d'empathie et de professionnalisme."
        },
        {
            text: "Mon mari et moi avons eu la chance d'être accompagnés par Sarah Mansouri dans le cadre d'une thérapie de couple, à un moment de notre vie où nous traversions une épreuve qui nous paraissait insurmontable. À l'époque fiancée, nous remettions profondément en question notre avenir commun et le sens même de notre engagement. Avec une bienveillance rare et une justesse de parole remarquable, Sarah Mansouri a su nous guider dans nos questionnements les plus intimes. Grâce à son écoute, sa sagesse et les outils précieux qu'elle nous a transmis, nous avons appris à mieux nous comprendre, à mieux communiquer et à transformer nos fragilités en force. Hamdoullah, ce travail nous a permis de retrouver l'harmonie et d'avancer vers une fin heureuse, fondée sur la confiance et la sérénité."
        },
        {
            text: "J'ai eu l'occasion de suivre une séance de thérapie de couple en compagnie de mon épouse avec Madame Mansouri. Cette séance nous a « fait du bien » même si Mme Mansouri n'a pas de « baguette magique » et que tous les problèmes ne se régleront jamais à travers une seule séance de thérapie. En revanche, j'ai apprécié à sa juste valeur la démarche non intrusive ni « commerciale » de Mme Mansouri. Elle nous a tout de suite mis à l'aise en nous expliquant qu'elle n'était pas là pour nous voir et revoir à l'infini. Au contraire, son objectif est que chaque couple se sente libre de la consulter ou pas en fonction de « où en est le couple ». Parfois une seule séance peut suffire à remettre certains sujets « sur les rails », parfois il est trop tard, parfois il faut revenir pour aller plus en profondeur... Chaque cas a ses spécificités, et Mme Mansouri l'a bien compris et en tient compte dans ses thérapies. Je recommande en tous les cas, et quoi qu'il en soit, il faut que le « fit » soit là, cela dépend de tout un chacun."
        },
        {
            text: "Lors d'une période forte en tensions, mon mari et moi sommes allés voir Sarah afin de nous aider à y voir plus clair. La première chose qui m'a marquée chez Sarah, c'est son enthousiasme, autrement dit sa « good vibe ». Elle nous a tout de suite mis à l'aise, car il faut le dire, ce n'était pas une démarche facile pour nous de parler à une inconnue de nos soucis de couple. Une seule séance a suffi pour que l'on prenne conscience des choses sur lesquelles nous devions travailler, mais aussi des choses sur lesquelles nous devions lâcher prise. Sarah nous a aidé à relativiser. C'était donc une thérapie très courte mais très pertinente. J'ai apprécié son honnêteté et sa spontanéité."
        }
    ];

    return (
        <section id="testimonials" className="testimonials">
            <div className="container">
                <h2 className="section-title">Ce que disent mes clients</h2>

                <div className="testimonials-list">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-item card">
                            <p>« {testimonial.text} »</p>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
        .testimonials {
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
        .testimonials-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .testimonial-item {
          padding: 2.5rem;
          background-color: var(--accent);
          border: none;
          position: relative;
        }
        .testimonial-item p {
          font-size: 1rem;
          color: var(--text-main);
          line-height: 1.7;
          font-style: italic;
        }
        @media (max-width: 768px) {
          .testimonial-item {
            padding: 1.5rem;
          }
        }
      `}</style>
        </section>
    );
};

export default Testimonials;
