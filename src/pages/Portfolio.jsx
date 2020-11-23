import React from 'react'
import Jumbotron from '../comp/Jumbotron'
import Card from '../comp/Card'
// images
import Protfolio1 from './portfolio.png'

export default function Portfolio() {
    return (
        <div>
            <Jumbotron title="My Portfolio" copy="This is my portfolio page." />
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-lg-3 pb-3">
                        <Card title="xyz" subtitle="xyz" img={Protfolio1} copy=";aldsjfa;sjfl;aksjd;lasjdasj lasdkjl" link1="https://github.com" link1title="Github" link2="https://desagin.app" link2title="Website" />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 pb-3">
                        <Card title="xyz" subtitle="xyz" img={Protfolio1} copy=";aldsjfa;sjfl;aksjd;lasjdasj lasdkjl" link1="https://github.com" link1title="Github" link2="https://desagin.app" link2title="Website" />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 pb-3">
                        <Card title="xyz" subtitle="xyz" img={Protfolio1} copy=";aldsjfa;sjfl;aksjd;lasjdasj lasdkjl" link1="https://github.com" link1title="Github" link2="https://desagin.app" link2title="Website" />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 pb-3">
                        <Card title="xyz" subtitle="xyz" img={Protfolio1} copy=";aldsjfa;sjfl;aksjd;lasjdasj lasdkjl" link1="https://github.com" link1title="Github" link2="https://desagin.app" link2title="Website" />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 pb-3">
                        <Card title="xyz" subtitle="xyz" img={Protfolio1} copy=";aldsjfa;sjfl;aksjd;lasjdasj lasdkjl" link1="https://github.com" link1title="Github" link2="https://desagin.app" link2title="Website" />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 pb-3">
                        <Card title="xyz" subtitle="xyz" img={Protfolio1} copy=";aldsjfa;sjfl;aksjd;lasjdasj lasdkjl" link1="https://github.com" link1title="Github" link2="https://desagin.app" link2title="Website" />
                    </div>
                </div>
            </div>
        </div>
    )
}
