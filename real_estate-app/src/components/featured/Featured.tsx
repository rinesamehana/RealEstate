import "./featured.css";

const Featured = () => {
  return (
    <div className="container">
      <div>
        <div className="description">
          <div className="items">
            <div className="heading">
              <h2>Who's Who in Real Estate</h2>
            </div>
            <div className="otherheading">
              <div className="item">
                <h3>Number 4</h3>
                <span>Portal for Luxury</span>
                <span>Properties on the Web</span>
              </div>
              <div className="item">
                <h3>130K+</h3>
                <span>Collective</span>
                <span>Professionals</span>
              </div>
              <div className="item">
                <h3>$190B+</h3>
                <span>Real-Estate</span>
                <span>Sold Annually</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
