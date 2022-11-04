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
            </div>
            <div className="otherheading">
              <div className="item">
                <h3>1,412</h3>
                <span>Homes for sale</span>
            
              </div>
              <div className="item">
                <h3>76</h3>
                <span>Open houses</span>
           
              </div>
              <div className="item">
                <h3>4193</h3>
                <span>Recently sold</span>
         
              </div>
              <div className="item">
                <h3>276</h3>
                <span>Price reduced</span>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
};

export default Featured;
