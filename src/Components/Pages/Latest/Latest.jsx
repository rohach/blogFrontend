import React from 'react';
import './latest.css';
import img from '../../Assets/bg.jpg';

const Latest = () => {
  return (
    <section>
      <div className="smallLine"></div>
      <div className="recent">Latest Posts</div>
      <div className="latest">
        <div className="latest_inner">
          <img src={img} alt="" className="latest_img" />
          <div className="latest_heading">
            Grilled Flank Steak with Chimichurri
          </div>
          <div className="latest_desc">
            Potenti tincidunt arcu euismod curabitur iaculis ut aliquet
            facilisis pharetra, pharetra dolor scelerisque.
          </div>
          <button className="share">
            Read more <i className="ri-arrow-right-fill"></i>
          </button>
        </div>

        <div className="latest_inner">
          <img src={img} alt="" className="latest_img" />
          <div className="latest_heading">
            Grilled Flank Steak with Chimichurri
          </div>
          <div className="latest_desc">
            Potenti tincidunt arcu euismod curabitur iaculis ut aliquet
            facilisis pharetra, pharetra dolor scelerisque.
          </div>
          <button className="share">
            Read more <i className="ri-arrow-right-fill"></i>
          </button>
        </div>

        <div className="latest_inner">
          <img src={img} alt="" className="latest_img" />
          <div className="latest_heading">
            Grilled Flank Steak with Chimichurri
          </div>
          <div className="latest_desc">
            Potenti tincidunt arcu euismod curabitur iaculis ut aliquet
            facilisis pharetra, pharetra dolor scelerisque.
          </div>
          <button className="share">
            Read more <i className="ri-arrow-right-fill"></i>
          </button>
        </div>

        <div className="latest_inner">
          <img src={img} alt="" className="latest_img" />
          <div className="latest_heading">
            Grilled Flank Steak with Chimichurri
          </div>
          <div className="latest_desc">
            Potenti tincidunt arcu euismod curabitur iaculis ut aliquet
            facilisis pharetra, pharetra dolor scelerisque.
          </div>
          <button className="share">
            Read more <i className="ri-arrow-right-fill"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Latest;
