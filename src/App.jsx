import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="intro" className="parallax-window" data-parallax="scroll" data-image-src="img/antique-cafe-bg-01.jpg">
        <nav id="tm-nav" className="fixed w-full">
          <div className="tm-container mx-auto px-2 md:py-6 text-right">
            <button className="md:hidden py-2 px-2" id="menu-toggle"><i className="fas fa-2x fa-bars tm-text-gold"></i></button>
            <ul className="mb-3 md:mb-0 text-2xl font-normal flex justify-end flex-col md:flex-row">
              <li className="inline-block mb-4 mx-4"><a href="#intro" className="tm-text-gold py-1 md:py-3 px-4">Intro</a></li>
              <li className="inline-block mb-4 mx-4"><a href="#menu" className="tm-text-gold py-1 md:py-3 px-4">Menu</a></li>
              <li className="inline-block mb-4 mx-4"><a href="#about" className="tm-text-gold py-1 md:py-3 px-4">sobre</a></li>
              <li className="inline-block mb-4 mx-4"><a href="#contact" className="tm-text-gold py-1 md:py-3 px-4">Contato</a></li>
            </ul>
          </div>
        </nav>
        <div className="container mx-auto px-2 tm-intro-width">
          <div className="sm:pb-60 sm:pt-48 py-20">
            <div className="bg-black bg-opacity-70 p-12 mb-5 text-center">
              <h1 className="text-white text-5xl tm-logo-font mb-5">Vaisių café e</h1>
              <p className="tm-text-gold tm-text-2xl">sua porção de energia diaria</p>
            </div>
            <div className="bg-black bg-opacity-70 p-10 mb-5">
              <p className="text-white leading-8 text-sm font-light">
                A nova linha Vaisių café Sabores, entrega uma verdadeira obra-prima em sabor e aroma, que pode ser apreciada como café espresso ou como base para receitas de cappuccino, latte ou macchiato. Basta adicionar leite aveludado para criar a iguaria perfeita em casa .
                . </p>
            </div>
            <div className="text-center">
              <div className="inline-block">
                <a href="#menu" className="flex justify-center items-center bg-black bg-opacity-70 py-6 px-8 rounded-lg font-semibold tm-text-2xl tm-text-gold hover:text-gray-200 transition">
                  <i className="fas fa-coffee mr-3"></i>
                  <span>vamos ver...</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="menu" className="parallax-window" data-parallax="scroll" data-image-src="img/antique-cafe-bg-02.jpg">
        <div className="container mx-auto tm-container py-24 sm:py-48">
          <div className="text-center mb-16">
            <h2 className="bg-white tm-text-brown py-6 px-12 text-4xl font-medium inline-block rounded-md">nosso Menu de café</h2>
          </div>
          <div className="flex flex-col lg:flex-row justify-around items-center">
            <div className="flex-1 m-5 rounded-xl px-4 py-6 sm:px-8 sm:py-10 tm-bg-brown tm-item-container">
              <div className="flex items-start mb-6 tm-menu-item">
                <img src="img/menu-item-1.jpg" alt="Image" className="rounded-md"/>
                  <div className="ml-3 sm:ml-6">
                    <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow"> Cappuccino</h3>
                    <div className="text-white text-md sm:text-lg font-light mb-1">pequeno R$8.50</div>
                    <div className="text-white text-md sm:text-lg font-light">medio R$10.50</div>
                  </div>
              </div>
              <div className="flex items-start mb-6 tm-menu-item">
                <img src="img/menu-item-2.jpg" alt="Image" className="rounded-md"/>
                  <div className="ml-3 sm:ml-6">
                    <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow"> Americano</h3>
                    <div className="text-white text-md sm:text-lg font-light mb-1">pequeno R$9.50 </div>
                    <div className="text-white text-md sm:text-lg font-light">medio R$12.50</div>
                  </div>
              </div>
              <div className="flex items-start mb-6 tm-menu-item">
                <img src="img/menu-item-3.jpg" alt="Image" className="rounded-md"/>
                  <div className="ml-3 sm:ml-6">
                    <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow">Latte quente </h3>
                    <div className="text-white text-md sm:text-lg font-light mb-1">pequeno R$11.75</div>
                    <div className="text-white text-md sm:text-lg font-light">medio R$14.75</div>
                  </div>
              </div>
              <div className="flex items-start mb-6 tm-menu-item">
                <img src="img/menu-item-4.jpg" alt="Image" className="rounded-md"/>
                  <div className="ml-3 sm:ml-6">
                    <h3 className="text-lg sm:text-xl tm-text-yellow mb-1"> Espresso</h3>
                    <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow">Chocolate quente</h3>
                    <div className="text-white text-md sm:text-lg font-light">pequeno R$11.75 . medio R$14.75</div>
                  </div>
              </div>
            </div>
            <div className="flex-1 m-5 rounded-xl px-4 py-6 sm:px-8 sm:py-10 tm-bg-brown tm-item-container">
              <div className="flex items-start justify-end mb-6 tm-menu-item-2">
                <div className="text-right mr-6">
                  <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow">Iced Cappuccino</h3>
                  <div className="text-white text-md sm:text-lg font-light mb-1">pequeno R$10</div>
                  <div className="text-white text-md sm:text-lg font-light">grande R$15</div>
                </div>
                <img src="img/menu-item-5.jpg" alt="Image" className="rounded-md"/>
              </div>
              <div className="flex items-start justify-end mb-6 tm-menu-item-2">
                <div className="text-right mr-6">
                  <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow">Iced Americano</h3>
                  <div className="text-white text-md sm:text-lg font-light mb-1">pequeno R$12.50</div>
                  <div className="text-white text-md sm:text-lg font-light">grande R$16.50</div>
                </div>
                <img src="img/menu-item-6.jpg" alt="Image" className="rounded-md"/>
              </div>
              <div className="flex items-start justify-end mb-6 tm-menu-item-2">
                <div className="text-right mr-6">
                  <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow">Iced Milky Latte</h3>
                  <div className="text-white text-md sm:text-lg font-light mb-1">pequeno R$14</div>
                  <div className="text-white text-md sm:text-lg font-light">grande R$18</div>
                </div>
                <img src="img/menu-item-7.jpg" alt="Image" className="rounded-md"/>
              </div>
              <div className="flex items-start justify-end mb-6 tm-menu-item-2">
                <div className="text-right mr-6">
                  <h3 className="text-lg sm:text-xl tm-text-yellow mb-1">Iced Espresso</h3>
                  <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow">Iced Mocha</h3>
                  <div className="text-white text-md sm:text-lg font-light">pequeno R$10 . grande R$15</div>
                </div>
                <img src="img/menu-item-8.jpg" alt="Image" className="rounded-md"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="about" className="parallax-window" data-parallax="scroll" data-image-src="img/antique-cafe-bg-03.jpg">
        <div className="container mx-auto tm-container py-24 sm:py-48">
          <div className="tm-item-container sm:ml-auto sm:mr-12 mx-auto sm:px-0 px-4">
            <div className="bg-white bg-opacity-80 p-12 pb-14 rounded-xl mb-5">
              <h2 className="mb-6 tm-text-green text-4xl font-medium">Sobre o nosso café</h2>
              <p className="mb-6 text-base leading-8">
                Bem-vindo ao nosso site da caféteria! Aqui você encontrará tudo o que precisa saber sobre a nossa caféteria, desde nossos produtos e serviços
                Nosso objetivo é oferecer aos nossos clientes uma experiência única e agradável em nossa caféteria, com produtos de alta qualidade e um ambiente acolhedor. Neste site, você encontrará informações detalhadas sobre nossos cafés, chás e outras opções de menu, além de nossos horários de funcionamento e localização.                  </p>

            </div>
            <a href="#contact" className="inline-block tm-bg-green transition text-white text-xl pt-3 pb-4 px-8 rounded-md">
              <i className="far fa-comments mr-4"></i>
              Contato
            </a>
          </div>
        </div>
      </div>
      <div id="contact" className="parallax-window relative" data-parallax="scroll" data-image-src="img/antique-cafe-bg-04.jpg">
        <div className="container mx-auto tm-container pt-24 pb-48 sm:py-48">
          <div className="flex flex-col lg:flex-row justify-around items-center lg:items-stretch">
            <div className="flex-1 rounded-xl px-10 py-12 m-5 bg-white bg-opacity-80 tm-item-container">
              <h2 className="text-3xl mb-6 tm-text-green">Fale com a gente</h2>
              <p className="mb-6 text-lg leading-8">
                conte para a gente como foi a sua experiênciacom o nosso site
              </p>
              <p className="mb-10 text-lg">
                <span className="block mb-2">Tel: <a href="tel:0100200340" className="hover:text-yellow-600 transition">(61)4002-8922</a></span>
                <span className="block">Email: <a href="mailto:info@company.com" className="hover:text-yellow-600 transition">Vaisiųcafé@gmail.com</a></span>
              </p>
              <div className="text-center">
                <a href="https://www.google.com/maps" className="inline-block text-white text-2xl pl-10 pr-12 py-6 rounded-lg transition tm-bg-green">
                  <i className="fas fa-map-marked-alt mr-8"></i>
                  abrir Mapa
                </a>
              </div>
            </div>
            <div className="flex-1 rounded-xl p-12 pb-14 m-5 bg-black bg-opacity-50 tm-item-container">
              <form action="" method="POST" className="text-lg">
                <input type="text" name="name" className="input w-full bg-black border-b bg-opacity-0 text-white px-0 py-4 mb-4 tm-border-gold" placeholder="Name" required="" />
                <input type="email" name="email" className="input w-full bg-black border-b bg-opacity-0 text-white px-0 py-4 mb-4 tm-border-gold" placeholder="Email" required="" />
                <textarea rows="6" name="message" className="input w-full bg-black border-b bg-opacity-0 text-white px-0 py-4 mb-4 tm-border-gold" placeholder="Message..." required=""></textarea>
                <div className="text-right">
                  <button type="submit" className="text-white hover:text-yellow-500 transition">enviar</button>
                </div>
              </form>
            </div>
          </div>
          <footer className="absolute bottom-0 left-0 w-full">
            <div className="text-white container mx-auto tm-container p-8 text-lg flex flex-col md:flex-row justify-between">
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}

export default App