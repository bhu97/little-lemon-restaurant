import React from 'react';
import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.jpeg';
const Carousel = () => {
  return (
    <div>
      <div
        id='carouselExampleCaptions'
        class='carousel slide'
        data-bs-ride='carousel'
      >
        <div class='carousel-indicators'>
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to='0'
            class='active'
            aria-current='true'
            aria-label='Slide 1'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to='1'
            aria-label='Slide 2'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to='2'
            aria-label='Slide 3'
          ></button>
        </div>
        <div class='carousel-inner'>
          <div class='carousel-item active'>
            <img
              src={image1}
              height='500px'
              style={{
                objectFit: 'contain',
                padding: '5px',
              }}
              class='d-block w-100'
              alt='...'
            />
            <div class='carousel-caption d-none d-md-block'></div>
          </div>
          <div class='carousel-item'>
            <img
              src={image2}
              height='500px'
              style={{ objectFit: 'contain', padding: '5px' }}
              class='d-block w-100'
              alt='...'
            />
          </div>
          <div class='carousel-item'>
            <img
              src={image3}
              height='500px'
              style={{ objectFit: 'contain', padding: '5px' }}
              class='d-block w-100'
              alt='...'
            />
          </div>
        </div>
        <button
          class='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide='prev'
        >
          <span class='carousel-control-prev-icon' aria-hidden='true'></span>
          <span class='visually-hidden'>Previous</span>
        </button>
        <button
          class='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide='next'
        >
          <span class='carousel-control-next-icon' aria-hidden='true'></span>
          <span class='visually-hidden'>Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
