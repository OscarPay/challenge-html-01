import React from 'react';
import '../styles/components/App.styl';

import img1 from '../../resources/imgs/dose-media-344938.png';
import img2 from '../../resources/imgs/aidan-hancock-455440.png';
import img3 from '../../resources/imgs/annie-spratt-213059.png';
import img4 from '../../resources/imgs/crew-22235.png';
import img5 from '../../resources/imgs/jeff-sheldon-264920.png';

import Header from './Header';
import Products from './Products';
import Product from './Product';
import Footer from './Footer';

const description =
  'There is a lot of exciting stuff going on in the starts above us that make astronomy so much fun.';

const products = [
  {
    id: 1,
    img: img1,
    little: false,
    label: 'Technology',
    title: 'Using Banner Stands To Increase Trade Show Traffic',
    description,
  },
  {
    id: 2,
    img: img2,
    little: true,
    label: 'Technology',
    title: 'Search Engine Optimization And Advertising',
    description,
  },
  {
    id: 3,
    img: img4,
    little: false,
    label: 'Finance',
    title: 'Writing A Good Headline For Your Advertisement',
    description,
  },
  {
    id: 4,
    img: img5,
    little: false,
    label: 'Entertainment',
    title: '15 Tips To Increase Your Adwords Profits',
    description,
  },
  {
    id: 5,
    img: img3,
    little: true,
    label: 'Technology',
    title:
      '6 Powerful Tips To Creating Testimonials That Sell YOur Products Fast',
    description,
  },
  {
    id: 6,
    img: img1,
    little: false,
    label: 'Technology',
    title: 'Using Banner Stands To Increase Trade Show Traffic',
    description,
  },
  {
    id: 7,
    img: img5,
    little: false,
    label: 'Entertainment',
    title: '15 Tips To Increase Your Adwords Profits',
    description,
  },
  {
    id: 8,
    img: img4,
    little: false,
    label: 'Finance',
    title: 'Writing A Good Headline For Your Advertisement',
    description,
  },
  {
    id: 9,
    img: img2,
    little: true,
    label: 'Technology',
    title: 'Search Engine Optimization And Advertising',
    description,
  },
];

const App = () => (
  <section>
    <Header />

    <Products>
      {products.map(product => (
        <Product key={product.id} {...product} />
      ))}
    </Products>

    <Footer />
  </section>
);

export default App;
