import React, { useEffect } from "react";

const MenuIndicator = () => {
  useEffect(() => {
    const indicator = document.querySelector(".nav-indicator");
    const items = document.querySelectorAll(".nav-item");

    function handleIndicator(el) {
      items.forEach((item) => {
        item.classList.remove("is-active");
        item.removeAttribute("style");
      });

      indicator.style.width = `${el.offsetWidth}px`;
      indicator.style.left = `${el.offsetLeft}px`;
      indicator.style.backgroundColor = el.getAttribute("active-color");

      el.classList.add("is-active");
      el.style.color = el.getAttribute("active-color");
    }

    items.forEach((item, index) => {
      item.addEventListener("click", (e) => {
        handleIndicator(e.target);
      });
      item.classList.contains("is-active") && handleIndicator(item);
    });
  }, []);

  return (
    <div>
      <nav className="nav">
        <a href="/" className="nav-item is-active" active-color="orange">
          Home
        </a>
        <a href="/about" className="nav-item" active-color="green">
          About
        </a>
        <a href="/testimonials" className="nav-item" active-color="blue">
          Testimonials
        </a>
        <a href="/blog" className="nav-item" active-color="red">
          Blog
        </a>
        <a href="/contact" className="nav-item" active-color="rebeccapurple">
          Contact
        </a>
        <span className="nav-indicator" />
      </nav>
    </div>
  );
};

export default MenuIndicator;
