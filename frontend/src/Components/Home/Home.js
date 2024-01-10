import './Home.css' ;
function Home() {
    return(
        
        <div className='headHome'>
        <div className='homeStyle'>
            <h1>Web Developer</h1>
            <h2>Este es mi Portafolio web!</h2><br/>
            <div >
            <button class='btn1' >My Works</button>
            <button class='btn2'>Download CV</button>
        </div>
        </div>
        <div className="bodyHome">
        <h5>Acerca de mi
        Hola! mi nombre es Miguel y tengo gran afinidad hacía el trabajo colaborativo, me gusta crear diseños que inspiren e involucren a las personas. Como diseñador UI, considero que un buen producto no solo brinda una solución sino que permite crear una experiencia emocional en las personas que lo usan.
        En mi proceso creativo utilizo herramientas como Figma, Adobe XD, Photoshop e Illustrator que me ayudan en el flujo de trabajo para la producción de interfaces de usuario.
        </h5> 
        <button class='btn1' >My Works</button>
        </div>
     
        </div>
       );
}

export default Home;