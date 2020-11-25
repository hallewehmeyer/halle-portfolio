import React from 'react'
import Jumbotron from '../comp/Jumbotron'
import Card from '../comp/Card'
// images
import Portfolio1 from '../images/Calcutron.png'
import Portfolio2 from '../images/BreakAway.png'
import Portfolio3 from '../images/DailyPlannerApp.png'
import Portfolio4 from '../images/KAS.png'




export default function Portfolio() {
    return (
        <div>
            <Jumbotron title="My Portfolio" copy="This is my portfolio page." />
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-lg-3 pb-3">
                        <Card title="xyz" subtitle="xyz" img={Portfolio1} copy=";aldsjfa;sjfl;aksjd;lasjdasj lasdkjl" link1="https://github.com/hallewehmeyer/Calcutron" link1title="Github" link2="https://hallewehmeyer.github.io/Calcutron/" link2title="Website" />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 pb-3">
                        <Card title="xyz" subtitle="xyz" img={Portfolio2} copy=";aldsjfa;sjfl;aksjd;lasjdasj lasdkjl" link1="https://github.com/GrimmeDev/BreakAway.git" link1title="Github" link2="https://github.com/GrimmeDev/BreakAway.git" link2title="Website" />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 pb-3">
                        <Card title="xyz" subtitle="xyz" img={Portfolio3} copy=";aldsjfa;sjfl;aksjd;lasjdasj lasdkjl" link1="https://github.com/hallewehmeyer/DailyPlanner" link1title="Github" link2="https://hallewehmeyer.github.io/DailyPlanner/" link2title="Website" />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 pb-3">
                        <Card title="xyz" subtitle="xyz" img={Portfolio4} copy=";aldsjfa;sjfl;aksjd;lasjdasj lasdkjl" link1="https://github.com/hallewehmeyer/KeepAustinSocial" link1title="Github" link2="https://github.com/hallewehmeyer/KeepAustinSocial" link2title="Website" />
                    </div>
                    {/* <div className="col-sm-6 col-md-4 col-lg-3 pb-3">
                        <Card title="xyz" subtitle="xyz" img={Protfolio1} copy=";aldsjfa;sjfl;aksjd;lasjdasj lasdkjl" link1="https://github.com" link1title="Github" link2="https://desagin.app" link2title="Website" />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 pb-3">
                        <Card title="xyz" subtitle="xyz" img={Protfolio1} copy=";aldsjfa;sjfl;aksjd;lasjdasj lasdkjl" link1="https://github.com" link1title="Github" link2="https://desagin.app" link2title="Website" /> */}
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}
