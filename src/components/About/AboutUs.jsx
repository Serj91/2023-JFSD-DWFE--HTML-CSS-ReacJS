import React, {Fragment,useState} from 'react'
import "./About.css"

const AboutUs = () => {
  const [ toggleTab, setToggleTab] = useState() 
  const toggleState = (index) => {
    setToggleTab(index)
  }
  return (
    <Fragment>
      <section className='aboutus'>
        <div className='about'>
        <h1>Sobre Nosotros</h1>
        <p>
        Misiotrónica es una empresa familiar fundada en 1991 en la ciudad de 
        Posadas, Misiones.  
        </p>
        </div>
          <div className='about-row'>
            
          <div className="about-column">
            <div className="about-img"></div>
          </div>
          <div className="about-column">
            <div className="about-tabs">
              <div className={toggleTab === 1 ?"single-tab active-tab" : "single-tab"}
              onClick = {() => toggleState(1)}
              >
                <h2>Nuestra Historia</h2>
              </div>
              <div className={toggleTab === 2 ?"single-tab active-tab" : "single-tab"}
              onClick = {() => toggleState(2)}
              >
                <h2>Alianzas Estratégicas</h2>
              </div>
              <div className={toggleTab === 3 ?"single-tab active-tab" : "single-tab"}
              onClick = {() => toggleState(3)}
              >
                <h2>Staff</h2>
              </div>
            </div>
            <div className="tab-content">
              

              <div className={toggleTab === 1 ? "content active-content" : "content"}>
                <h2>Un Legado Electrónico</h2>
                <p>En el vibrante corazón de Posadas, Misiones, nació Misiotronica hace más de tres décadas.
                  Desde 1989, nuestra tienda ha sido el punto de encuentro para los apasionados de la electrónica en la región.</p>
                <p>Con el sueño de ofrecer insumos electrónicos de primera calidad y asesoramiento experto, Manuel, un joven entusiasta,
                   fundó Misiotronica. A lo largo del tiempo, hemos crecido y evolucionado junto con la tecnología,
                    siendo testigos de las transformaciones en el mundo electrónico.</p>
                <p>En Misiotronica, encontrarás desde componentes básicos hasta las últimas innovaciones en robótica e inteligencia artificial.
                   Nuestro equipo de expertos en electrónica está aquí para brindarte atención personalizada
                    y soluciones a medida para cada proyecto que emprendas.</p>
                <p>Nos enorgullecemos de ser una parte activa de la comunidad, colaborando con instituciones educativas
                   y organizaciones locales para promover la innovación y el desarrollo tecnológico.</p>
              </div>


              <div className={toggleTab === 2 ? "content active-content" : "content"}>
              <h2>Universidad Nacional de Misiones</h2>
              <p>Desde 2015, somos los proveedores de todos los insumos tecnológicos utilizados
                 en la facultad y los preparadores de los kits de Robótica utilizados en el curso de Arduino.</p>
              <h2>Soluciones Electrónicas</h2>
              <p>Empresa dedicada al rubro de la domótica,nos enorgullecemos de ser sus principales proveedores.</p>
              </div>


              <div className={toggleTab === 3 ? "content active-content" : "content"}>
                <div className="aliance-column">
                  <h3>Manuel Lopez</h3>
                  <h3>Fundador</h3>
                  <span>1989 - ACTUALIDAD</span>
                  <p>
                  Apasionado por la electrónica desde joven, Manuel decidió convertir su amor por la tecnología
                  en un negocio que llevara innovación y soluciones electrónicas a su comunidad.
                  Con dedicación y visión, Misiotrónica se convirtió rápidamente en el referente
                  local de insumos electrónicos y soluciones tecnológicas vanguardistas.
                  </p>
                </div>
              </div>

            </div>
          </div>

          </div>
      </section>
    </Fragment>
  )
}

export default AboutUs