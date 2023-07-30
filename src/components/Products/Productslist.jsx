import React, { useState } from 'react';
import Card from './Card/Card'
import IMG1 from '../Products/Card/images/ARD001.png';
import IMG2 from '../Products/Card/images/HDMI1.png'
import IMG3 from '../Products/Card/images/VGA1.png'
import IMG4 from '../Products/Card/images/SOLDADOR.png'
import IMG5 from '../Products/Card/images/MULTIMETRO.png'
import IMG6 from '../Products/Card/images/soporte.png'
import Searchbar from '../Searchbar/Searchbar';

function ProductCard({...props}) {
    return <Card {...props} />
  }

  export default function Productslist() {
    const [products,] = useState([
      {
        id: 1,
        frontImg: IMG1,
        backImg: IMG1,
        title: 'PLACA ARDUINO',
        description:
          'MODULO UNO R3 + CABLE USB\nCaracterísticas:\nMicrocontrolador: Atmega328P - Chip Desmontable - CH340.\nIncluye Cable USB',
        price: 'Precio:$5000',
      },
      {
        id: 2,
        frontImg: IMG2,
        backImg: IMG2,
        title: 'CABLE HDMI A HDMI',
        description:
          'CABLE HDMI A HDMI 1.5M LTA018\nCaracterísticas:\nCable HDMI para imagen de alta definición. FULL HD\nConectores bañados en oro',
        price: 'Precio:$2000',
      },
      {
        id: 3,
        frontImg: IMG3,
        backImg: IMG3,
        title: 'CABLE VGA a VGA',
        description:
          'CABLE VGA A VGA 1.8M\nCaracterísticas:\nPara conexiones a Monitores desde PC de escritorios o a Proyectores',
        price: 'Precio:$1000',
      },
      {
        id: 4,
        frontImg: IMG4,
        backImg: IMG4,
        title: 'SOLDADOR',
        description:
          'SOLDADOR VESUBIO C-2 220V\nCaracterísticas:\nMarca: Vesubio\nModelo: C-2\nPotencia: 100W Voltaje de entrada: 220V',
        price: 'Precio:$8000',
      },
      {
        id: 5,
        frontImg: IMG5,
        backImg: IMG5,
        title: 'MULTÍMETRO',
        description:
          'MULTÍMETRO ANALOGICO FULLENERGY\nCaracterísticas:\nIncluye Juego puntas de prueba + instructivo.',
        price: 'Precio:$11000',
      },
      {
        id: 6,
        frontImg: IMG6,
        backImg: IMG6,
        title: 'SOPORTE',
        description:
          'SOPORTE C/LUPA Y LUZ LED\nCaracterísticas:\nSoporte para soldadura con lupa /\nCuerpo metálico.',
        price: 'Precio:$7000',
      },
    ]);
  
    const [filteredProducts, setFilteredProducts] = useState(products);
  
    const handleSearch = (searchTerm) => {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    };
  
    return (
      <>
        <Searchbar onSearch={handleSearch} />
        <section className="products">
          {filteredProducts.map((product) => (
            <div key={product.id}>
              <ProductCard
                frontImg={product.frontImg}
                backImg={product.backImg}
                title={product.title}
                description={product.description}
                price={product.price}
              />
            </div>
          ))}
        </section>
      </>
    );
  }