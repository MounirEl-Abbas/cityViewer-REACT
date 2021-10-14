import React from "react";

const HomeFooter = () => {
  return (
    <footer>
      <section className="newsletter">
        <h3>Join our newletter and get 20% off</h3>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero qui
            quibusdam pariatur eos commodi distinctio.
          </p>
          <form>
            <input type="email" placeholder="Enter Email" name="" id="" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
      <section className="copyright">
        <p>
          &copy; 2021 <span>CityViewer</span> All right reserved
        </p>
      </section>
    </footer>
  );
};

export default HomeFooter;
