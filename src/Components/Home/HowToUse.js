import React from 'react'

function HowToUse() {
  return (
    <div>
        <div className="section">
            <div className="content">
            <div className="sectionHeading">
                How does BoloForms work?
            </div>
            <div className="sectionSubHeading">
                Set up your first workflow in just 3 easy steps.
            </div>
            </div>
            <div className="cardsContainer">
                <div className="card">
                    <img className='cardImage' src='https://www.boloforms.com/_next/static/media/2.2709e204.svg' />
                    <div className="cardHeading">
                        Step 1 :
                    </div>
                    <div className="cardSubheading">
                       Choose a template or add questions to create your Google Form.
                    </div>
                </div>
                <div className="card">
                    <img className='cardImage' src='https://www.boloforms.com/_next/static/media/1.b2cc23b0.svg' />
                    <div className="cardHeading">
                        Step 2 :
                    </div>
                    <div className="cardSubheading">
                    Enable Single/Multi Step approval and add necessary approvers!
                    </div>
                </div>
                <div className="card">
                    <img className='cardImage' src='https://www.boloforms.com/_next/static/media/3.1a7ec00e.svg' />
                    <div className="cardHeading">
                        Step 3 :
                    </div>
                    <div className="cardSubheading">
                    Now you can enable the workflow and share the Google Form.
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default HowToUse