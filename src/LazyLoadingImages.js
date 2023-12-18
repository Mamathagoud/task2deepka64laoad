import React, { useState, useEffect } from 'react';

const LazyLoadingImages = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);

    // Fetch data from a publicly available API
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await response.json();

    setImages((prevImages) => [...prevImages, ...data]);
    setLoading(false);
  };

  useEffect(() => {
    fetchData(); // Initial data fetch

    const handleScroll = () => {
      // Check if the user has reached the bottom of the page
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        fetchData(); // Load more data when reaching the end of the page
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <div>
      <div>
        {images.map((image) => (
          <img key={image.id} src={image.url} alt={image.title} style={{ width: '500px' }} />
        ))}
      </div>
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default LazyLoadingImages;
