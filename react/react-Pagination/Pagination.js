import React, { useState, useEffect } from 'react';

const Pagination = () => {
    //let's simulate that you have 10 pages
  const totalPages = 10;
  const imagesPerPage = 9;
  const [activePage, setActivePage] = useState(1);
  const [displayedPages, setDisplayedPages] = useState([1, 2, 3 , 4 ,5]);
  const [imagesByPage, setImagesByPage] = useState({});

  //to get random imgs for the gird 
  const generateRandomImage = () => {
    return `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 100)}`;
  };

  const generateImagesForPage = (page) => {
    const images = [];
    for (let i = 0; i < imagesPerPage; i++) {
      images.push(generateRandomImage());
    }
    return images;
  };

  const handlePageClick = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setActivePage(pageNumber);
    }

    updateDisplayedPages(pageNumber);
    updateImagesForPage(pageNumber);
  };

  const updateDisplayedPages = (pageNumber) => {
    const halfDisplayedPages = Math.floor(5 / 2);
    let startPage = Math.max(1, pageNumber - halfDisplayedPages);
    let endPage = Math.min(totalPages, startPage + 4);
  
    if (endPage - startPage < 4) {
      startPage = Math.max(1, endPage - 4);
    }
  
    setDisplayedPages(Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i));
  };

  const updateImagesForPage = (pageNumber) => {
    if (!imagesByPage[pageNumber]) {
      const images = generateImagesForPage(pageNumber);
      setImagesByPage((prevImagesByPage) => ({
        ...prevImagesByPage,
        [pageNumber]: images,
      }));
    }
  };

  useEffect(() => {
    updateImagesForPage(1);
  }, []);

  const images = imagesByPage[activePage] || [];

  return (
    <div className="container">
      <div className="image-grid">
        {images.map((imageUrl, index) => (
          <img key={index} src={imageUrl} className='imgs' alt={`Image ${index}`} />
        ))}
      </div>
      <nav className="pagination">
        <button 
          onClick={() => handlePageClick(activePage - 1)}
          className="previous"
          disabled={activePage === 1}
        >
          Previous
        </button>
        {displayedPages.map((pageNumber) => (
          <button  key={pageNumber}
            onClick={() => handlePageClick(pageNumber)}
            className={`page-link ${activePage === pageNumber ? 'current' : ''}`} 
            id="bottone5">{pageNumber}</button>
        ))}
        <button
          onClick={() => handlePageClick(activePage + 1)}
          className="next"
          disabled={activePage === totalPages}
        >
          Next
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
