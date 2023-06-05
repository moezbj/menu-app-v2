import React, { useState } from "react";
import classNames from "../../utils/classNames";
import "./menuItem.css";
import { Pannellum } from "pannellum-react";
import ReactModal from "react-modal";

import "react-ar-viewer/dist/index.css";
import ModelViewerPage from "../../models/ModelViewer";
const MenuItem = ({
  name,
  className,
  img,
  modelPath,
  onClick,
  open,
  secondModel,
}) => {
  const imageUrl = secondModel;
  const [inside, setInside] = useState(false);

  return (
    <div className={classNames(`menu-item ${className ? className : ""}`)}>
      <div onClick={() => onClick(name)} className="menu-content">
        <span className="name-product">{name}</span>
        <span className="name-product">3D view</span>
      </div>
      <div
        style={{
          width: "100%",
        }}
      >
        <img src={img} alt="sz" style={{ width: "100%", height: "auto" }} />
      </div>

      <ReactModal
        isOpen={open}
        contentLabel="Minimal Modal Example"
        className="modal"
        overlayClassName="overlay"
      >
        <button onClick={onClick} className="back">Retour</button>

        <div
          style={{
            width: "100%",
            height: "85%",
            position:'relative'
          }}
        >
          <ModelViewerPage modelPath={modelPath} poster={img} />{" "}
          <button className="test_btn" onClick={() => setInside(true)}>
            Interior
          </button>
          <ReactModal
            isOpen={inside}
            contentLabel="Minimal Modal Example"
            className="modal"
            overlayClassName="overlay"
          >
            <button onClick={() => setInside(false)}>Close Modal 2</button>

            <Pannellum
              width="100%"
              height="100%"
              image={imageUrl}
              pitch={10}
              yaw={180}
              hfov={110}
              autoLoad
              showZoomCtrl={false}
            >
              <Pannellum.Hotspot
                type="custom"
                pitch={12.41}
                yaw={117.76}
                handleClick={(evt, name) => console.log(name)}
                name="image info"
              />
            </Pannellum>
          </ReactModal>
        </div>
      </ReactModal>
    </div>
  );
};

export default MenuItem;
