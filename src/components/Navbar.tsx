

const Navbar = () => {
    const navLinks = [
        { name: 'À propos', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Déroulement', href: '#process' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Témoignages', href: '#testimonials' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="navbar">
            <div className="container nav-content">
                <ul className="nav-links">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href}>{link.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <style>{`
        .navbar {
          position: sticky;
          top: 0;
          background: var(--surface);
          border-bottom: 1px solid var(--border);
          z-index: 1000;
          padding: 1rem 0;
        }
        .nav-content {
          display: flex;
          justify-content: center;
        }
        .nav-links {
          display: flex;
          list-style: none;
          gap: 2rem;
        }
        .nav-links a {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--secondary);
          text-transform: capitalize;
        }
        .nav-links a:hover {
          color: var(--primary);
        }
        @media (max-width: 768px) {
          .nav-links {
            gap: 1rem;
            flex-wrap: wrap;
            justify-content: center;
          }
          .nav-links a {
            font-size: 0.8rem;
          }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
