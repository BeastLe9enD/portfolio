import Container from 'react-bootstrap/Container';

import * as Icon from 'react-bootstrap-icons'

function Link({href, title}) {
    return (
        <a href={href}>
            <li>{title}</li>
        </a>
    )
}

function IconLink({href, icon}) {
    return (
        <div className="nav-link-icon">
            <a href={href}>
                {icon}
            </a>
        </div>
    );
}

function Footer() {
    return (
        <section id="footer" class="footer">
            <Container>
                <div class="spacer"></div>
                <div class="elements">
                    <ul>
                        <Link href="#about" title="About"/>
                        <Link href="#work" title="Work"/>
                        <Link href="#contact" title="Contact"/>
                    </ul>
                </div>
                <div class="spacer"></div>
                <div class="elements">
                    <p>Copyright &#169; 2023 Lorenz Klaus</p>
                </div>
                <div class="elements">
                    <IconLink href="https://github.com/beastle9end" icon={<Icon.Github/>}/>
                    <IconLink href="https://instagram.com/beastle9end" icon={<Icon.Instagram/>}/>
                    <IconLink href="https://twitter.com/beastle9end" icon={<Icon.Twitter/>}/>
                </div>
            </Container>
        </section>
    )
}

export default Footer;