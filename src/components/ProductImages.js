import React, { useState } from 'react';
import styled from 'styled-components';

const ProductImages = ({ images = [{ url: '' }] }) => {
  // set default value for the props because it is passed as undefined first because useEffect fetch images after rendering is completed (need it as empty array and empty string for url property of object inside array)
  const [mainImage, setMainImage] = useState(images[0]);

  const onClickImage = (index) => {
    setMainImage(images[index]);
  };
  return (
    <Wrapper>
      <img src={mainImage.url} alt='main' className='main' />
      <div className='gallery'>
        {images.map((image, index) => {
          const { url, filename } = image;
          return (
            <img
              src={url}
              alt={filename}
              key={index}
              onClick={() => onClickImage(index)}
              className={`${image.url === mainImage.url? 'active' : null} `}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    border: 2px solid var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;

export default ProductImages;
