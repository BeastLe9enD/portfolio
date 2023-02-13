import Carousel from 'react-bootstrap/Carousel';
import {AnimationOnScroll} from "react-animation-on-scroll";

import * as Icon from 'react-bootstrap-icons'

import VkExtMeshShaderExampleImg from './assets/projects/vk-ext-mesh-shader-example.jpg';
import PuzzleGameImg from './assets/projects/puzzle-game.jpg';
import MoselbikeImg from './assets/projects/moselbike.jpg';
import SanctuaryIslandImg from './assets/projects/sanctuary-island.jpg';
import Metal3ExampleImg from './assets/projects/metal-3-example.jpg';
import ZweiradKlausImg from './assets/projects/zweirad-klaus.jpg';
import RenderPipelineShadersRsImg from './assets/projects/render-pipeline-shaders-rs.jpg';
import PortfolioImg from './assets/projects/portfolio.jpg';

function getIconIfNotNull(value, icon) {
    return value == null ? (<></>) : (
        <a className="small-icon" href={value}>
            {icon}
        </a>
    );
}

function WorkItem({title, description, time, image, github, itch, website}) {
    let github_icon = getIconIfNotNull(github, <Icon.Github/>);
    let itch_icon = getIconIfNotNull(itch, <Icon.Controller/>);
    let website_icon = getIconIfNotNull(website, <Icon.GlobeEuropeAfrica/>);

    return (
        <>
            <div className="work-carousel-item">
                <img src={image}/>
            </div>
            <Carousel.Caption className="work-carousel-caption">
                <div className="work-carousel-item-header">
                    <p>{time}</p>
                    <h1>{title}</h1>
                </div>
                <div className="work-carousel-item-description">
                    <p>{description}</p>
                </div>
                <div className="spacer"/>
                <div className="work-carousel-icons">
                    {github_icon}
                    {itch_icon}
                    {website_icon}
                </div>
            </Carousel.Caption>
        </>
    );
}

function Work() {
    return (
        <section id="work" className="work text-center">
            <AnimationOnScroll animateIn="animate__backInDown" duration={0.5} animateOnce={true}>
                <h2>My Work</h2>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__slideInLeft" duration={0.5} animateOnce={true}>
                <p>Check out my projects and work examples</p>
            </AnimationOnScroll>
            <br></br>

            <Carousel id="carousel">
                <Carousel.Item>
                    <WorkItem title="Vulkan Mesh Shaders Example"
                              description="An example rendering some objects with the new Vulkan mesh shader extension. The meshlets are visualized in different colors and there is a Free Cam to fly through the scene. Each mesh is rendered in different levels of detail depending on how far it is from the camera."
                              time="September 2022 - December 2022"
                              image={VkExtMeshShaderExampleImg}
                              github="https://github.com/projectkml/vk-ext-mesh-shader-example"/>
                </Carousel.Item>
                <Carousel.Item>
                    <WorkItem title="The Goal is The Goal"
                              description="The Goal is the Goal is a puzzle game I'm developing together with my brother, another friend is responsible for the graphics. The goal is simple: get all the players on the field, and master the obstacles by clever thinking. The game is written in Rust and is built on its own small 2D engine that renders with WGPU, the level editor is using Dear ImGui."
                              time="Juni 2022 - Present"
                              image={PuzzleGameImg}/>
                </Carousel.Item>
                <Carousel.Item>
                    <WorkItem title="Moselbike"
                              description="A website of a bicycle rental company. The site includes some pages with pictures/texts, there is also a rental system where you can rent bikes and pay with Paypal. The renter can add bikes, print automatically generated rental contracts and manage the database. The system is written in PHP."
                              time="April 2021 - August 2021"
                              image={MoselbikeImg}
                              website="https://moselbike.de"/>
                </Carousel.Item>
                <Carousel.Item>
                    <WorkItem title="Sanctuary Island"
                              description="A small game, which I programmed with 2 other programmers and 3 designers within one week during the Game Dev Week Trier 2022 with the Unity Engine. You play as a little natural fairy. Your duty is to turn the island given to you into a sanctuary for fantastical creatures."
                              time="September 2022"
                              image={SanctuaryIslandImg}
                              github="https://github.com/BeastLe9enD/sanctuary-island"
                              itch="https://hoppelhase23.itch.io/sanctuary-island"/>
                </Carousel.Item>
                <Carousel.Item>
                    <WorkItem title="Metal 3 Example"
                              description="When Apple announced that the Metal API would get Mesh Shaders at WWDC 2022, I was very curious to see to what extent the mesh shaders mapped to DX12 and in what ways they differed. So I set up a small example project, which was certainly helpful for other people, since there was no real documentation at that time."
                              time="Juni 2022"
                              image={Metal3ExampleImg}
                              github="https://github.com/BeastLe9enD/metal-3-example"/>
                </Carousel.Item>
                <Carousel.Item>
                    <WorkItem title="Zweirad Klaus"
                              description="A static page for a bike store that I wrote using Bootstrap. It is responsive to all devices, and integrates an external system to display catalogs for bikes."
                              time="February 2021 - May 2021"
                              image={ZweiradKlausImg}
                              website="https://zweirad-klaus.de"/>
                </Carousel.Item>
                <Carousel.Item>
                    <WorkItem title="Render Pipeline Shaders RS"
                              description="A very lightweight Rust wrapper around the Render Pipeline Shaders library from AMD. The goal of the library is to make it friendly for use with Rust without straying too far from the original library."
                              time="December 2022 - Present"
                              image={RenderPipelineShadersRsImg}
                              github="https://github.com/projectkml/render-pipeline-shaders-rs"/>
                </Carousel.Item>
                <Carousel.Item>
                    <WorkItem title="My portfolio website"
                              description="My portfolio website that you are looking at right now. It was written with React and Bootstrap in Javascript."
                              time="February 2023"
                              image={PortfolioImg}
                              github="https://github.com/BeastLe9enD/portfolio"
                              website="https://beastle9end.github.io/portfolio"/>
                </Carousel.Item>
            </Carousel>
        </section>
    )
}

export default Work;