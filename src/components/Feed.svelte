<script>
  const longParagraph =
    "Dragée cake dessert sesame snaps tootsie roll gummies cupcake marshmallow cupcake. Sesame snaps sweet cotton candy marshmallow tiramisu. Muffin marzipan halvah candy canes wafer biscuit marzipan candy. Apple pie pudding lollipop jelly-o tiramisu pie tootsie roll.";

  const shortParagraph =
    "Dragée cake dessert sesame snaps tootsie roll gummies cupcake marshmallow cupcake. Sesame snaps sweet cotton candy marshmallow tiramisu.";

  import { bigHighlight, smallHighlights, otherImages } from "../stores.js";
</script>

<style>
  .Feed {
    display: grid;
    grid-template-columns: repeat(2, 542px);
    grid-template-rows: repeat(2, 542px);
    justify-content: center;
    height: 80vh;
    max-width: 100%;
    overflow: auto;
  }
  .Feed::-webkit-scrollbar {
    display: none;
  }

  .big-highlight {
    position: relative;
    transition: ease-in-out 0.2s;
  }
  .big-highlight img {
    width: 540px;
  }
  .big-highlight:hover {
    opacity: 0.6;
  }
  .big-highlight-text {
    display: none;
    position: absolute;
    width: 400px;
    margin: 0 auto;
    left: 12%;
    top: 18%;
    color: #ffffff;
    text-shadow: 2px 2px 3px #000000;
    font-size: 1.4rem;
  }
  .big-highlight:hover > .big-highlight-text {
    display: block;
    z-index: 2;
    opacity: 1;
  }

  .small-container {
    display: grid;
    grid-template-columns: repeat(2, 271px);
    grid-template-rows: repeat(2, 271px);
  }

  .small-highlight {
    position: relative;
    transition: ease-in-out 0.2s;
  }
  .small-highlight img {
    width: 270px;
  }
  .small-highlight:hover {
    opacity: 0.6;
  }
  .small-highlight-text {
    display: none;
    position: absolute;
    width: 200px;
    margin: 0 auto;
    left: 12%;
    top: 18%;
    color: #ffffff;
    text-shadow: 2px 2px 3px #000000;
    font-size: 1.2rem;
  }
  .small-highlight:hover > .small-highlight-text {
    display: block;
  }

  .other-imgs {
    display: grid;
    grid-template-columns: repeat(3, 362px);
    grid-template-rows: repeat(3, 362px);
  }
  .other-imgs img {
    width: 360px;
    transition: ease-in-out 0.2s;
  }
  .other-imgs img:hover {
    opacity: 0.6;
  }
</style>

<div class="Feed">
  <div class="big-highlight">
    <img src="images/arsbasta01.png" alt="highlight1" />
    <p class="big-highlight-text">{longParagraph}</p>
  </div>
  <div class="small-container">
    <div class="small-highlight">
      <img src="images/arsbasta06.png" alt="highlight2" />
      <p class="small-highlight-text">{shortParagraph}</p>
    </div>
    <div class="small-highlight">
      <img src="images/arsbasta08.png" alt="highlight3" />
      <p class="small-highlight-text">{shortParagraph}</p>
    </div>
    <div class="small-highlight">
      <img src="images/arsbasta09.png" alt="highlight4" />
      <p class="small-highlight-text">{shortParagraph}</p>
    </div>
    <div class="small-highlight">
      <img src="images/arsbasta10.png" alt="highlight5" />
      <p class="small-highlight-text">{shortParagraph}</p>
    </div>
  </div>
  <div class="other-imgs">
    <img src="images/arsbasta03.gif" alt="pic01" />
    <img src="images/arsbasta16.png" alt="pic02" />
    <img src="images/arsbasta18.gif" alt="pic03" />
    <img src="images/arsbasta18.gif" alt="pic03" />
    <img src="images/arsbasta03.gif" alt="pic01" />
    <img src="images/arsbasta16.png" alt="pic02" />
    <img src="images/arsbasta16.png" alt="pic02" />
    <img src="images/arsbasta18.gif" alt="pic03" />
    <img src="images/arsbasta03.gif" alt="pic01" />
  </div>
</div>
