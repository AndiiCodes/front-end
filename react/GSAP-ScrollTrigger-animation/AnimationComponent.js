import React, { useEffect } from 'react';

const AnimationComponent = () => {
  const scrub = true;

  useEffect(() => {
    const isAnimationOk = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

    if (isAnimationOk) {
      setupAnimations();
    }

    function setupAnimations() {
      window.gsap.from('.keyhole', {
        'clip-path': 'polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%)',
        scrollTrigger: {
          trigger: '.section--primary',
          start: 'top top', // when the top of the trigger hits the top of the viewport
          end: 'bottom bottom', // bottom of the trigger hits the bottom of the viewport
          scrub: scrub,
          markers: false,
        },
      });

      window.gsap.to('.arrow', {
        opacity: 0,
        scrollTrigger: {
          trigger: '.section--primary',
          start: 'top top', // when the top of the trigger hits the top of the viewport
          end: '+=200', // scroll 150px down
          scrub: scrub,
        },
      });
    }
  }, []);

  return (
    <>
  <span className="keyhole" aria-hidden="true" />
  <span className="arrow" aria-hidden="true">
    <svg
      width={20}
      height={20}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="-5 -5 30 30"
    >
      <path
        d="M 0 10 H 20 L 10 0 M 20 10 L 10 20"
        strokeWidth={4}
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  </span>
  <main className="main">
    <section className="section section--primary">
      <div className="section__content">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={1470}
            height={1300}
          />
        </figure>
        <h1>At vero eos et accusamus.</h1>
        <p>
          Cupiditate non provident, similique sunt in culpa qui officia deserunt
          mollitia. Corrupti quos dolores et quas molestias excepturi sint
          occaecati. Ut aut reiciendis voluptatibus maiores alias consequatur
          aut perferendis doloribus asperiores repellat.
        </p>
        <p>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam. Et iusto odio
          dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
          atque.
        </p>
      </div>
    </section>
    <section className="section section--secondary">
      <div className="section__content">
        <p>
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
          impedit quo minus id quod maxime placeat.{" "}
          <strong> At vero eos et accusamus.</strong>{" "}
          <em> Nisi ut aliquid ex ea commodi consequatur?</em> Quis autem vel
          eum iure reprehenderit qui in ea voluptate velit esse quam.
        </p>
        <h2>At vero eos et accusamus.</h2>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
          Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo. Nam libero tempore, cum soluta nobis est eligendi optio
          cumque nihil impedit quo minus id quod maxime placeat.
        </p>
        <ol>
          <li>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam.
          </li>
          <li>Et harum quidem rerum facilis est et expedita distinctio.</li>
          <li>Architecto beatae vitae dicta sunt explicabo.</li>
        </ol>
        <h3>
          Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
          reprehenderit qui in ea voluptate velit esse quam.
        </h3>
        <p>
          Eaque ipsa quae ab illo inventore veritatis et quasi. Nisi ut aliquid
          ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui
          in ea voluptate velit esse quam. Duis aute irure dolor in
          reprehenderit in voluptate velit.
        </p>
        <ul>
          <li>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam.
          </li>
          <li>At vero eos et accusamus.</li>
          <li>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit.
          </li>
        </ul>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa. Laboris
          nisi ut aliquip ex ea commodo consequat. Animi, id est laborum et
          dolorum fuga. Neque porro quisquam est, qui dolorem ipsum quia dolor
          sit amet, consectetur, adipisci velit.
        </p>
        <p>
          Temporibus autem quibusdam et aut officiis debitis aut rerum
          necessitatibus saepe eveniet ut et voluptates repudiandae sint et
          molestiae non recusandae. Sed ut perspiciatis unde omnis iste natus
          error sit voluptatem.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit. Eaque ipsa
          quae ab illo inventore veritatis et quasi. Ut enim ad minima veniam,
          quis nostrum exercitationem ullam corporis suscipit laboriosam.
        </p>
        <p>
          Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
          reprehenderit qui in ea voluptate velit esse quam. Facere possimus,
          omnis voluptas assumenda est, omnis dolor repellendus. Accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.
        </p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco. At vero
          eos et accusamus. Sed ut perspiciatis unde omnis iste natus error sit
          voluptatem. Architecto beatae vitae dicta sunt explicabo. Et iusto
          odio dignissimos ducimus qui blanditiis praesentium voluptatum
          deleniti atque.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco. Ut aut reiciendis
          voluptatibus maiores alias consequatur aut perferendis doloribus
          asperiores repellat.
        </p>
        <p>
          Fugiat quo voluptas nulla pariatur? Et iusto odio dignissimos ducimus
          qui blanditiis praesentium voluptatum deleniti atque. Et harum quidem
          rerum facilis est et expedita distinctio. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco.
        </p>
        <p>
          Corrupti quos dolores et quas molestias excepturi sint occaecati.
          Animi, id est laborum et dolorum fuga. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa. Corrupti quos dolores et quas
          molestias excepturi sint occaecati.
        </p>
        <p>
          Totam rem aperiam. At vero eos et accusamus. Eaque ipsa quae ab illo
          inventore veritatis et quasi. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam.
        </p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco. Architecto
          beatae vitae dicta sunt explicabo. Nisi ut aliquid ex ea commodi
          consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
          velit esse quam.
        </p>
      </div>
    </section>
    <section className="section section--tertiary">
      <div className="section__content">
        <h2>Qui officia deserunt mollit anim id est laborum.</h2>
        <p>
          Et harum quidem rerum facilis est et expedita distinctio. Nemo enim
          ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Et
          iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
          deleniti atque.
        </p>
        <p>
          Eaque ipsa quae ab illo inventore veritatis et quasi.{" "}
          <strong>
            {" "}
            Nihil molestiae consequatur, vel illum qui dolorem eum.
          </strong>{" "}
          <em>
            {" "}
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam.
          </em>{" "}
          Et harum quidem rerum facilis est et expedita distinctio.
        </p>
      </div>
    </section>
  </main>
</>

  );
};

export default AnimationComponent;
