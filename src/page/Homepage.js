import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Homepage = () => {
  return (
    <div>
      <div>
        <div className="Logo">
          <img 
          width={380}
          height={330}
          src={process.env.PUBLIC_URL + '/img/Logo.jpg'} />
        </div>
      </div>
      <div className="search-bar">
          <input type="text" />
          <button>
           <FontAwesomeIcon icon={faMagnifyingGlass} />
         </button>
      </div>
    </div>
  )
}

export default Homepage
