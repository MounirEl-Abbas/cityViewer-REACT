import React from "react";
/* Icons */
import { GiCompass, GiStairsGoal, GiArchiveRegister } from "react-icons/gi";

const HomeTravelGuarantee = () => {
  return (
    <section className="travel-guarantee">
      <div className="travel-guarantee-header">
        <h2>Travel Plans Built Only For You</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem magnam quibusdam asperiores at, ut fugiat itaque vero
          cum tempora. Voluptates!
        </p>
      </div>
      <div className="flex-container">
        <article>
          <GiCompass />
          <h3>Mission</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            perferendis aperiam numquam qui, odit, alias voluptate, nisi
            distinctio ad quidem a omnis tempora corrupti soluta?
          </p>
        </article>
        <article>
          <GiStairsGoal />
          <h3>Vision</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iure
            expedita dolorem cum natus harum facere! Doloremque ducimus
            voluptatem fugiat?
          </p>
        </article>
        <article>
          <GiArchiveRegister />
          <h3>Guarantee</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            veritatis error deleniti corporis pariatur nam facere repudiandae
            est repellendus consequatur laudantium doloribus ab labore a minus
            placeat quos, amet adipisci?
          </p>
        </article>
      </div>
    </section>
  );
};

export default HomeTravelGuarantee;
