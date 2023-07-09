import image from './img/foto.jpeg'
import Header from './components/header'
import Button from './components/button'
import Footer from './components/footer'
import './styles/index.css'


function App() {
  const skills = 'HTML | CSS | JavaScript React.JS'

  return (
    
    <>
    <Header
     nome="Julio Cesar"
     image={image}
     dev="Desenvolvedor Front-End"
     skills={skills}
    />
    <main>
      <Button link="https://github.com/mazarottoo" texto="GitHub"/>
      <Button link="https://instagram.com/mazarottoo_" texto="Instagram"/>
      <Button link="https://twitter.com/guaranamz" texto="Twitter"/>
      <Button link="https://linkedin.com/in/mazarottoo" texto="Linkedln"/>
      <Button link="https://www.threads.net/@mazarottoo_" texto="Threads"/>
      <Button link="mailto:mazarottoop@gmail.com" texto="GitHub"/>
    </main>
    <Footer></Footer>
    </>
  )
}

export default App
