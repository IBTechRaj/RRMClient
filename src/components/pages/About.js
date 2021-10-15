import React from 'react';

// var NewComponent = React.createClass({
function About() {
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title text-center wow fadeInDown mt-3" style={{ color: 'black' }}>Who We Are</h2>
            <p className="text-center wow fadeInDown">
              We are a group of young entrepreneurs who think of making life easier for the people of the city <br />
              This is the first step in that direction.
            </p>
          </div>
          <div className="row">
            <div className="col-sm-6 wow fadeInLeft">
              <img className="img-responsive" src="images/about.png" alt="" />
            </div>
            <div className="col-sm-6 wow fadeInRight">
              <p>
                It all started when our first car broke down and we had to run from pillar to post
              </p>
              <p>
                That was just the beginning.  As we experienced a series of hassles
                like periodical servicing, fixing minor repairs, more frequent washing
                we understood that it not only involves frequent visits to service centres
                or water service garages, but it also upsets one's work schedule and the
                resultant troubles.
              </p>
              <p>
                It is then we thought of a service which could help the vehicle owners
                get most of the vehicle maintenance things done at home.  This would make
                the life a vehicle owner comfortable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )

}
// });

export default About