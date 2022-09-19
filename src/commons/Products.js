import React from 'react'

const product=[
    {
      id:"1",
      name:"Pufi RAIN",
      imageUrl:"https://img.freepik.com/foto-gratis/hombre-atractivo-calle-paraguas-mira-al-frente_496169-2460.jpg?w=740&t=st=1663562778~exp=1663563378~hmac=c6ea1c251c2ac57b3c69f89d3bb04106956a471e1fa43fb150369dca0144fa32",
      productUrl:"https://img.freepik.com/vector-gratis/paraguas-azul-realista_1284-11412.jpg?w=740&t=st=1663562627~exp=1663563227~hmac=9bf1461dbf87e3109c2c0db07e5f82bbd8d1959c0aabd34e7dda152681684efa",
      description:"Descripción del producto. Este es un texto simulado",
  
    },
    {
      id:"2",
      name:"Pufi PUFF",
      imageUrl:"https://ae01.alicdn.com/kf/HTB1Yw_qQXXXXXbpaXXXq6xXFXXXT/Inflable-Sof-Al-Aire-Libre-Muebles-Sof-cama-de-Aire-Port-til-Nylon-Imitar-Interno-Externo.jpg_Q90.jpg_.webp",
      productUrl:"http://d3ugyf2ht6aenh.cloudfront.net/stores/001/991/708/products/tumbona-turquesa-82a8c0660229f96a1416419136615213-640-0.jpg",
      description:"Descripción del producto. Este es un texto simulado",
  
    },
    {
      id:"3",
      name:"Pufi CART",
      imageUrl:"https://img.freepik.com/foto-gratis/chica-scooter-electrico-bolsas-compras_23-2148286198.jpg?w=740&t=st=1663564085~exp=1663564685~hmac=1524f261f709fde3623cf07796c061fd3c0468995bb7cdc5ff26dbe9f8c279de",
      productUrl:"https://cdn.shopify.com/s/files/1/0478/3430/0578/products/cochecito-de-carga-plegable-portatil-retractil-aluminio-para-compras-mercado-verdulerias-supermercados-con-bolsa-incluido-montech-lima-peru-surco-carga-80kg-peru_800x.png?v=1602555160",
      description:"Descripción del producto. Este es un texto simulado",
  
    },
    {
      id:"4",
      name:"Pufi NAP",
      imageUrl:"https://www.sincable.mx/wp-content/uploads/2021/10/OD9-QEg-Almohadas-para-viajes-2-50185679_s.jpg",
      productUrl:"https://img.freepik.com/vector-gratis/conjunto-iconos-vectoriales-realistas-almohada-cuello-medio-redondo-viaje-gris-vista-frontal-lateral_134830-1339.jpg?w=900&t=st=1663564254~exp=1663564854~hmac=d49091a6e10cb3d5c14f192291192a2a250d3bad713fc62d80ba81bd6f8755c3",
      description:"Descripción del producto. Este es un texto simulado",
     

  
    }
  ]

const Products = () => {
  
  return (
   
    <div>
      {
        product.map((product, index)=>(
          <article key={index} className= "products">
          <div  className = "articleImg">
            <img  src={product?.imageUrl} />
          </div>
          
          <div className="product">
          
              <img style={{maxHeight:"100px",margin:"auto"}} src={product?.productUrl} />
              <h3>{product?.name}</h3>
              <p>{product?.description}</p>
              
            </div>
           </article>
            
        ))
      }
          
      </div>
      
    
  )
}

export default Products;