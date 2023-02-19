import React from 'react'

function Hero() {
  return (
    <div style={{marginBottom:"4rem"}}>
        <div className="heroContainer">
            <div className="leftContainer">
                <div className="headingText text">
                Transform Google Forms Into Interactive Workflows
                </div>
                <div className="contentText text">
                BoloForms is a Google Forms add on that allows you to add conditional logic to your forms. With BoloForms, you can create interactive workflows, approval flows & automate processes.
                </div>
                <div className="ctaButton text navbarButton fillButton">
                 Install for Free
                </div>
            </div>
            <div className="rightContainer">
            <iframe loading="lazy" class="iframeStyles" src="https://www.youtube.com/embed/riiUkCRpIio" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
            </div>
        </div>
    </div>
  )
}

export default Hero