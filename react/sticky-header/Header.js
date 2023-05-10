// Header.js 
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const header = document.getElementsByClassName("header")[0];
    const headerTop = header.getBoundingClientRect().top;
    document.body.style.setProperty("--_header-h", `${header.offsetHeight}px`);
    function handleScroll() {
      header.classList.toggle("is-sticky",
      window.scrollY > headerTop + header.offsetHeight
      );
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
    <header className="header">
      <div className="header__inner">
        <div className="logo">
          <svg
            width={110}
            height={26}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.745.03c-.297-.02-.596-.03-.898-.03C5.752 0 0 5.752 0 12.847s5.752 12.846 12.847 12.846c5.806 0 10.713-3.852 12.304-9.14-.37.087-.755.133-1.15.133h-5.256a5 5 0 0 1-5-5V.031Zm27.204 25.663c7.095 0 12.847-5.751 12.847-12.846S48.044 0 40.949 0 28.102 5.752 28.102 12.847s5.752 12.846 12.847 12.846Zm56.204 0c7.095 0 12.847-5.751 12.847-12.846S104.248 0 97.153 0 84.307 5.752 84.307 12.847s5.751 12.846 12.846 12.846ZM81.898 12.847c0 6.08-4.224 11.174-9.898 12.506V23a5 5 0 0 0-5-5h-9c-.237 0-.47.017-.699.049a12.803 12.803 0 0 1-1.097-5.202C56.204 5.752 61.956 0 69.051 0s12.847 5.752 12.847 12.847Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="#">Our Works</a>
            </li>
            <li>
              <a href="#">Our Teams</a>
            </li>
            <li>
              <a href="#">Our Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <section className="hero">
      <div className="hero__thumb">
        <img
          src="https://images.unsplash.com/photo-1681068420510-cb528c65d595?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
          alt=""
        />
      </div>
      <div className="hero__caption">
        <h1>Sticky Header Background Animation</h1>
        <p>Html + Css + Vanilla Js</p>
      </div>
    </section>
    <section className="content flow">
      <h1>Heading</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
        assumenda facilis ut rerum quae totam consequuntur amet voluptas placeat,
        maiores laudantium alias a quia ea corrupti optio nesciunt blanditiis
        veritatis!
      </p>
      <h2>Heading level 2</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque in quia
        illo iste cumque distinctio dignissimos animi, id suscipit quaerat, non
        consequatur alias quos enim voluptates ad nulla? Explicabo, consectetur!
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, sequi
        numquam in explicabo sunt fugit ad quo eos? Assumenda dicta doloribus ipsa
        quaerat explicabo magnam libero. Ratione aspernatur repellendus
        recusandae.
      </p>
      <p>
        Natus quam similique ea, recusandae reiciendis blanditiis rerum totam
        praesentium dignissimos, distinctio, mollitia quae. Aliquid obcaecati vero
        a ullam voluptates! Nostrum beatae rerum facere a, dolores minus fuga
        ullam in.
      </p>
      <p>
        Perspiciatis asperiores nemo, nostrum facere, atque neque quis sed officia
        labore doloremque placeat modi debitis? Hic ad enim ut blanditiis quis
        minus! Tempore error magni sed nobis, eveniet odio asperiores!
      </p>
      <p>
        Dolore molestiae praesentium beatae voluptate, sint modi iusto magni sit
        distinctio consequuntur alias corporis? Numquam inventore, nulla maxime
        provident voluptatum alias dicta. Similique neque hic quod suscipit
        reiciendis nam consequatur.
      </p>
      <h2>Heading level 2</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque in quia
        illo iste cumque distinctio dignissimos animi, id suscipit quaerat, non
        consequatur alias quos enim voluptates ad nulla? Explicabo, consectetur!
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, sequi
        numquam in explicabo sunt fugit ad quo eos? Assumenda dicta doloribus ipsa
        quaerat explicabo magnam libero. Ratione aspernatur repellendus
        recusandae.
      </p>
      <p>
        Natus quam similique ea, recusandae reiciendis blanditiis rerum totam
        praesentium dignissimos, distinctio, mollitia quae. Aliquid obcaecati vero
        a ullam voluptates! Nostrum beatae rerum facere a, dolores minus fuga
        ullam in.
      </p>
      <p>
        Perspiciatis asperiores nemo, nostrum facere, atque neque quis sed officia
        labore doloremque placeat modi debitis? Hic ad enim ut blanditiis quis
        minus! Tempore error magni sed nobis, eveniet odio asperiores!
      </p>
      <p>
        Dolore molestiae praesentium beatae voluptate, sint modi iusto magni sit
        distinctio consequuntur alias corporis? Numquam inventore, nulla maxime
        provident voluptatum alias dicta. Similique neque hic quod suscipit
        reiciendis nam consequatur.
      </p>
    </section>
  </>
  
  );
};
export default Header;

