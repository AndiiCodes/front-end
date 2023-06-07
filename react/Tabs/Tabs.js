import React, { useEffect } from 'react';

export default function Tabs() {
  useEffect(() => {
    let tabHeader = document.getElementsByClassName('tab-header')[0];
    let tabIndicator = document.getElementsByClassName('tab-indicator')[0];
    let tabBody = document.getElementsByClassName('tab-body')[0];

    let tabsPane = tabHeader.getElementsByTagName('div');

    for (let i = 0; i < tabsPane.length; i++) {
      tabsPane[i].addEventListener('click', function () {
        tabHeader.getElementsByClassName('active')[0].classList.remove('active');
        tabsPane[i].classList.add('active');
        tabBody.getElementsByClassName('active')[0].classList.remove('active');
        tabBody.getElementsByTagName('div')[i].classList.add('active');

        tabIndicator.style.left = `calc(calc(100% / 4) * ${i})`;
      });
    }
  }, []);

  return (
    <div>
      <div className="tabs">
        <div className="tab-header">
          <div className="active">
            <i className="fa fa-code" /> Code
          </div>
          <div>
            <i className="fas fa-code" /> About
          </div>
          <div>
            <i className="fa fa-bar-chart" /> Services
          </div>
          <div>
            <i className="fa fa-envelope-o" /> Contact
          </div>
        </div>
        <div className="tab-indicator" />
        <div className="tab-body">
          <div className="active">
            <h2>This is code section</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error neque saepe commodi blanditiis fugiat nisi
              aliquam ratione porro quibusdam in, eveniet accusantium cumque. Dolore officia reprehenderit perferendis quod
              libero omnis.
            </p>
          </div>
          <div>
            <h2>This is about section</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi minus exercitationem vero, id autem fugit
              assumenda a molestiae numquam at, quisquam cumque. Labore eligendi perspiciatis quia incidunt quaerat ut
              ducimus?
            </p>
          </div>
          <div>
            <h2>This is services section</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi minus exercitationem vero, id autem fugit
              assumenda a molestiae numquam at, quisquam cumque. Labore eligendi perspiciatis quia incidunt quaerat ut
              ducimus?
            </p>
          </div>
          <div>
            <h2>This is contact section</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi minus exercitationem vero, id autem fugit
              assumenda a molestiae numquam at, quisquam cumque. Labore eligendi perspiciatis quia incidunt quaerat ut
              ducimus?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
