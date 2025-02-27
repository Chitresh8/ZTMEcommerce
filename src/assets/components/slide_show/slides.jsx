import React,{useState} from "react";

export const Sildes = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const restartClickHandler = () => {
    setCurrentIndex(0);
  };

  const prevClickHandler = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextClickHandler = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const currentSlide = slides[currentIndex];

  return (
    <div>
      <div>
        <button onClick={restartClickHandler} disabled={currentIndex === 0}>Restart</button>
        <button onClick={prevClickHandler} disabled={currentIndex === 0}>
          Prev
        </button>
        <button
          onClick={nextClickHandler}
          disabled={currentIndex === slides.length - 1}
        >
          Next
        </button>
      </div>
      <div>
        <h1>{currentSlide.title}</h1>
        <p>{currentSlide.text}</p>
      </div>
    </div>
  );
};
