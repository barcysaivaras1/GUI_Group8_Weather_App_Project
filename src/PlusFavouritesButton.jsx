import React from "react";
import "./PlusButtonStyle.css";

function PlusFavouritesButton() {
  const handleAddFavorite = () => {
    const favoritesContainer = document.querySelector(".iphone > .div");
    const londonEntry = `
      <div class="favourite-item">
        <p>
          <span class="span">London, <br /></span>
          <span class="text-wrapper-6">United Kingdom</span>
        </p>
        <div class="element">12º</div>
        <img src="img/cloudy.png" alt="Cloudy icon" />
      </div>
    `;
    favoritesContainer.insertAdjacentHTML("beforeend", londonEntry);

    const favoritesCount = document.querySelector(".text-wrapper-5");
    favoritesCount.textContent = "4 Favourites";
  };

  return (
    <div className="plus">
      <div className="group">
        <div className="overlap-group">
          <div className="rectangle">
            <div className="div" onClick={handleAddFavorite}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlusFavouritesButton;