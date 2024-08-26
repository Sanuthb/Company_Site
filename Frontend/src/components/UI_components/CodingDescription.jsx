import React, { useEffect, useRef, useState } from "react";
import styles from "./CodingDescription.module.css";

import html from "../../assets/Coding/html.svg";

const CodingDescription = ({ description }) => {
  //   console.dir(description);

  //   console.log(Object.keys(description));

  //   const imageSrc = [];

  //   description.images.map((img) => {
  //     import(`../../assets/Coding/${img}.svg`).then((data) => {
  //       console.log(data.default);
  //       imageSrc.push(data.default);
  //     });
  //   });

  //   console.log(imageSrc.length);

  //   console.log(imageSrc.length);

  //   for (let i = 0; i < imageSrc.length; i++) {
  //     console.log(imageSrc[i]);
  //   }

  //   imageSrc.forEach((src) => console.log(src));

  //   useEffect(() => {
  //     import("../../assets/Coding/Frontend/html.svg").then((data) => {
  //       console.log(data.default);
  //     });
  //   });

  //   import("../../assets/Coding/html.svg").then((data) => {
  //     console.log(data.default);

  //   });

  //

  const [imageSources, setImageSources] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      try {
        const importPromises = description.images.map((img) =>
          import(`../../assets/Coding/${img}.svg`)
        );

        const importedImages = await Promise.all(importPromises);

        const sources = importedImages.map((data) => data.default);
        setImageSources(sources);
      } catch (error) {
        console.error("Error importing images:", error);
      }
    };

    importImages();
  }, [description.images]);

  return (
    <div className={styles.container}>
      <div className={styles.ImgContainer}>
        {imageSources.map((src, index) => (
          <img src={src} key={index} />
        ))}
      </div>
      <div className={styles.TitleContainer}>
        {description.images.map((title, index) => (
          <span key={index}>{title.toUpperCase()}</span>
        ))}
      </div>
      <div className={styles.Description}>{description.description}</div>
    </div>
  );
};

export default CodingDescription;
