import PreviewImg from './assets/preview.jpg';

function Preview() {
    return (
        <section id="preview" className="preview text-center sticky-top">
            <img src={PreviewImg} className="w-100"></img>
            <div>
                <h1 class="animate__animated animate__zoomIn mb-5" style={{color: 'white'}}>Hi, I'm Lorenz!<br/>Building software is my passion!</h1>
                <a href="#work" className="animate__animated animate__zoomIn mt-5 big-button">My projects</a>
            </div>
        </section>
    )
}

export default Preview;