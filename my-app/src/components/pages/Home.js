import '../styles/home.css';
import Slideshow from '../Slideshow';

function Home() {
    return(
        <>
                <img src="https://images.unsplash.com/photo-1487700160041-babef9c3cb55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1452&q=80" alt="Plant in Vase" className="hero" />

                <section className="subheading">
                <h2>A Clean, Safe, and Comfortable Home</h2>
                <p className="subheading-text">Aerify provides a selection of air purifiers with different styles and settings to meet your home needs! Air purification technology is designed and equipped to improve air quality with high efficiency of indoor air filtration. You may use them in your office, bedroom, kitchen, or living room. They help leave your environment cleaner and healthier. The benefits of air purifiers are, they reduce harmful chemicals, neutralize unpleasant odors and fumes, can help those with asthma and allergies or other sensitivities to airborne particles, and remove ultra-fine particles and pollutants (including dust, smoke, bacteria, odor, pet dander, and pollen) in indoor environments.</p>
                </section>

                <h2 className="slideshow-header">View Our Products!</h2>

                <Slideshow />
        </>
    );
}

export default Home;