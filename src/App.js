import React from 'react';
import './App.css';
import Navbar from './Components/navbar.jsx';
import Jumbotron from './Components/jumbotron.jsx';
import Card from './Components/card.jsx';
import Footer from './Components/footer.jsx';

const cardsArray = [{
  img: "https://picsum.photos/id/1/500/325",
  title: "Card Title",
  description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  buttonUrl: "#",
  buttonLabel: "Go Somewhere"
},
{
  img: "https://picsum.photos/id/1/500/325",
  title: "Card Title",
  description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  buttonUrl: "#",
  buttonLabel: "Go Somewhere"
},
{
  img: "https://picsum.photos/id/1/500/325",
  title: "Card Title",
  description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  buttonUrl: "#",
  buttonLabel: "Go Somewhere"
},
{
  img: "https://picsum.photos/id/1/500/325",
  title: "Card Title",
  description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  buttonUrl: "#",
  buttonLabel: "Go Somewhere"
}]

const cardsContent = cardsArray.map((item, i) => {
  return (
    <Card
      img={item.img}
      title={item.title}
      description={item.description}
      buttonUrl={item.buttonUrl}
      buttonLabel={item.buttonLabel}
    />
  )
})

function App() {
  return (<>
    <Navbar />
    <div className="container">
      <Jumbotron
        title="A Warm Welcome!"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        buttonUrl="#"
        buttonLabel="Learn more"
      />
      <div className="card-deck">
        {cardsContent}
      </div>
    </div>
    <Footer />
  </>);
}


export default App;
