function Header() {
    return (<>
        <header className="sticky-header">
            <nav>
                <ul className="Menu">
                    <li>
                        <a href="#A-propos">A Propos</a>
                    </li>
                    <li>
                        <a href="#Mes-projets">Mes projets</a>
                    </li>
                    <li>
                        <a href="#Mes-formations">Formations</a>
                    </li>
                    <li className="bnt-Contact">
                        <a href="#Contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    </>
    )
}

export default Header;