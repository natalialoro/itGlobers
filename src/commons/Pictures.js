import React from "react";
const picture = [
  {
    url: "https://img.freepik.com/foto-gratis/persona-otono-paraguas_23-2149137864.jpg?w=2000",
  },
  {
    url: "https://img.freepik.com/foto-gratis/hermosa-mujer-joven-verduras-bolsa-compras-casa_1301-7672.jpg?w=740&t=st=1663564485~exp=1663565085~hmac=238ea5c853bd42af560b8e42f4de7a7dce50c66780a02cdca69232827b14b59b",
  },
  {
    url: "https://http2.mlstatic.com/D_NQ_NP_740209-MCO27635891274_062018-O.webp",
  },
  {
    url: "https://images-na.ssl-images-amazon.com/images/I/71mg9knT-TL._AC_UL600_SR600,400_.jpg",
  },
 
 
];
const Pictures = () => {
  return (
    <div>
      <div className="socialMedia">
         <span>INSTAGRAM</span>
        <p>#ESPUFFI</p>
        <div className="grid-container">
          {picture.map((picture, index) => (
            <article key={index} className="pictures">
              <img className="grid-item" src={picture?.url} />
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pictures;
