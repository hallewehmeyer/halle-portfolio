import React from 'react'
import Jumbotron from '../comp/Jumbotron'
import AboutImage from './portfolio.png'

export default function About() {
    return (
        <div>
            <Jumbotron title="About Me" copy="This is my about page."/>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <img src={AboutImage} alt="About Image" width="300"/>
                    </div>
                    <div className="col-sm-8">
                        <p>My name is Halle Wehmeyer, currently living in Austin, Texas, and I am so excited to start my career as a full-stack web developer! When I am not studying, you could probably find me somewhere outdoors, on a patio, or playing my guitar. I am very passionate about bringing creativity and optimistic energy to my work. I hope to never stop learning new things, and keep growing my skills and experience in the world of coding. Thank you for checking out my page, I hope to hear from you!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
