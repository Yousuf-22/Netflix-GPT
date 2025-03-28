// import React from "react";
// import { IMG_CDNURl } from "../utils/constants";

// const MovieCard = ({ posterPath }) => {
//   return (
//     <div className="w-42 pr-3">
//       <img alt="Movie Card" src={IMG_CDNURl + posterPath} />
//     </div>
//   );
// };

// export default MovieCard;

import React from "react";
import { IMG_CDNURl } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-42 pr-3">
      <img alt="Movie Card" src={IMG_CDNURl + posterPath} />
    </div>
  );
};

export default MovieCard;
