import React from "react";

// import "./Tips.css"

function Tips() {
  return (
      <div>
        <section className="info">
          <header role="banner">
            <h1>Tips About Covid-19</h1>
          </header>

        </section>

        <div className="container" id="middle">
          <div className="row">
            <div className="col-lg-12">
              <div className="main" id="content">
                <div className="overview">
                  <h2>OverView</h2>
                  <p>Coronavirus disease (COVID-19) is an infectious disease
                    caused by a newly discovered coronavirus.</p>
                  <p>Most people infected with the COVID-19 virus will
                    experience mild to moderate respiratory illness and recover
                    without requiring special treatment. Older people, and those
                    with underlying medical problems like cardiovascular
                    disease, diabetes, chronic respiratory disease, and cancer
                    are more likely to develop serious illness.</p>
                  <p>The best way to prevent and slow down transmission is be
                    well informed about the COVID-19 virus, the disease it
                    causes and how it spreads. Protect yourself and others from
                    infection by washing your hands or using an alcohol based
                    rub frequently and not touching your face. </p>
                  <p>The COVID-19 virus spreads primarily through droplets of
                    saliva or discharge from the nose when an infected person
                    coughs or sneezes, so it’s important that you also practice
                    respiratory etiquette (for example, by coughing into a
                    flexed elbow).</p>
                  <p>At this time, there are no specific vaccines or treatments
                    for COVID-19. However, there are many ongoing clinical
                    trials evaluating potential treatments. WHO will continue to
                    provide updated information as soon as clinical findings
                    become available.</p>
                  <p></p>
                </div>

                <div className="prevention">
                  <h2>Prevention</h2>
                  <p><strong>To prevent infection and to slow transmission of
                    COVID-19, do the following: </strong></p>
                  <ul>
                    <li>Wash your hands regularly with soap and water, or clean
                      them with alcohol-based hand rub.
                    </li>
                    <li>Maintain at least 1 metre distance between you and
                      people coughing or sneezing.
                    </li>
                    <li>Avoid touching your face.</li>
                    <li>Cover your mouth and nose when coughing or sneezing.
                    </li>
                    <li>Stay home if you feel unwell.</li>
                    <li>Refrain from smoking and other activities that weaken
                      the lungs.
                    </li>
                    <li>Practice physical distancing by avoiding unnecessary
                      travel and staying away from large groups of people.
                    </li>
                  </ul>
                </div>

                <div className="symptoms">
                  <h2>Symptoms</h2>
                  <p>COVID-19 affects different people in different ways. Most
                    infected people will develop mild to moderate illness and
                    recover without hospitalization.</p>
                  <p><strong>Most common symptoms:</strong></p>
                  <ul>
                    <li>fever</li>
                    <li>dry cough</li>
                    <li>tiredness</li>
                  </ul>
                  <p><strong>Less common symptoms:</strong></p>
                  <ul>
                    <li>aches and pains</li>
                    <li>sore throat</li>
                    <li>diarrhoea</li>
                    <li>conjunctivitis</li>
                    <li>headache</li>
                    <li>loss of taste or smell</li>
                    <li>a rash on skin, or discolouration of fingers or toes
                    </li>
                  </ul>
                  <p><strong>Serious symptoms:</strong></p>
                  <ul>
                    <li>difficulty breathing or shortness of breath</li>
                    <li>chest pain or pressure</li>
                    <li>loss of speech or movement</li>
                  </ul>
                  <p>Seek immediate medical attention if you have serious
                    symptoms. Always call before visiting your doctor or health
                    facility</p>
                  <p>People with mild symptoms who are otherwise healthy should
                    manage their symptoms at home.</p>
                  <p>On average it takes 5–6 days from when someone is infected
                    with the virus for symptoms to show, however it can take up
                    to 14 days. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Tips;