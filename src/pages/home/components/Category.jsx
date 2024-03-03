import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Card = ({ imageSrc, title }) => {
  return (
    <div className="mb-8 p-4 flex-shrink-0">
      <div className="max-w-xs mx-auto bg-white shadow-md rounded-md overflow-hidden cursor-pointer">
        <img src={imageSrc} alt="Image" className="w-full h-60 object-cover rounded-t-lg" />
        <div className="p-2">
          <h3 className="text-xl font-semibold text-center text-gray-800">{title}</h3>
        </div>
      </div>
    </div>
  );
};

const Category = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const images = [
    
    {
      id: 1,
      imageSrc: 'https://i.pinimg.com/564x/a2/c4/2e/a2c42ef039a77b459187b744d412e55a.jpg',
      title: 'Camera',
    },
    {
      id: 2,
      imageSrc: 'https://i.pinimg.com/564x/1e/c7/d5/1ec7d5a7c38ca44e5813c11e77d7ed19.jpg',
      title: 'Bike',
    },
    {
      id: 3,
      imageSrc: 'https://i.pinimg.com/564x/f8/57/2d/f8572d72318a8d84895b7ac584cfe5dd.jpg',
      title: 'Mobile',
    },
    {
      id: 4,
      imageSrc: 'https://i.pinimg.com/474x/6e/c3/6b/6ec36bfc451c8bef99d66900ab2e4beb.jpg',
      title: 'Car',
    },
    {
      id: 5,
      imageSrc: 'https://i.pinimg.com/564x/14/b6/16/14b6161c021921047a01d9e9219de05f.jpg',
      title: 'Laptop',
    },
    
    
    {
      id: 6,
      imageSrc: 'https://i.pinimg.com/564x/19/c8/20/19c820e8ecfff3ea3348e71849f04a7f.jpg',
      title: 'Tv',
    },
  ];

  return (
    <div className="bg-gray-200 p-16 relative">
      <div className="text-center p-3">
        <h2 className="text-2xl font-bold">Categories</h2>
        <p className="text-gray-600 p-4">
        Choose from thousands of gadgets in over all  across the Country.
        </p>
      </div>

      <div className="relative">
        <Slider {...settings}>
          {images.map((image) => (
            <Card key={image.id} {...image} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Category;
