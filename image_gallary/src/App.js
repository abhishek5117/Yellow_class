import React,{useState, useEffect} from 'react';
import './App.css';
import {Header} from './components/header';
import {Loader} from './components/loader';
import {Image} from './components/image';
import InfiniteScroll from 'react-infinite-scroll-component';
import Masonry from "react-masonry-css";
import { SRLWrapper } from 'simple-react-lightbox';

import axios from 'axios';
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
  }
  `;
const options ={
  settings:{
    overlayColor: 'grey'
  },
  buttons:{
    backgroundColor: 'light-grey',
    iconColor: 'fff'
  }

};


function App() {
    const [images,setImages] = useState([]);
    useEffect(() =>{
    
      fetchImages();
    }, [])

const fetchImages = () =>{
      const apiRoot = "https://api.unsplash.com";
      axios
      .get(`${apiRoot}/photos/random?client_id=XBs2seX-RmJpiULynIfaD4bFS7fQxBarOJ0yNIvpFEM&count=10`)
      .then(res => {
        setImages([...images, ...res.data]);
      })
    }

const breakpointsColumnsObj ={
  default: 6,
  1280: 3,
  992: 3,
  768: 2,
  576:1
};

    return (
      <div>
        <Header/>
        <GlobalStyle />
        <SRLWrapper options={options}>
        <div className="container-fluid">
        <div className="row">
        <div className="col-md-12">
        <InfiniteScroll
          dataLength={images.length}
          next={fetchImages}
          hasMore={true}
          loader={<Loader />}
        >
          <Masonry
          breakpointCols={breakpointsColumnsObj}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
          >
            {images.map(image => (
              <a href={image.urls.regular}>
              <Image url={image.urls.regular} key={image.id} />
              </a>
            ))}
         
          </Masonry>
        </InfiniteScroll>
        </div>
        </div>
        </div>
        </SRLWrapper>
      </div>
    );
  }

export default App;
