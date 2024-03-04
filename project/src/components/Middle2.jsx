import React from 'react'

const Middle2 = () => {
  return (
    <>
      <div className="jii" style={{backgroundColor:"white"}}>
        <h1>New & Trending</h1>
      </div>
      <div className="hii">
        <div className="nii">
          {/* <source media="(min-width: 1200px)" srcset="https://target.scene7.com/is/image/Target/GUEST_fc4eb0c8-1a07-4f18-8e99-8317e4ab99e7?wid=720&amp;qlt=80&amp;fmt=webp"> */}
          <a href="https://www.target.com/finds/stories/trends-top-10-february-ugc">
            <img
              src="https://target.scene7.com/is/image/Target/GUEST_fb70e4ac-e070-4b2a-b028-0e21b6550de4?fmt=webp&qlt=80&wid=600"
              alt=""
            />
            <h1>Top 10 most-shared finds</h1>
            <p>Explore what everyones been loving the past month.</p>
          </a>
        </div>
        <div className="nii">
          <a href="https://www.target.com/finds/stories/ideas-spring-break">
            <img
              src="https://target.scene7.com/is/image/Target/GUEST_c0980a5a-da34-41de-8925-1710ecedc858?fmt=webp&qlt=80&wid=600"
              alt=""
            />
            <h1>Spring break bring-alongs for your vacay </h1>
            <p>Wherever you go this spring, find packable picks to bring.</p>
          </a>
        </div>
        <div className="nii">
          <a href="https://www.target.com/finds/stories/trends-2024-bolder-hairstyle-accessory-decor">
            <img
              src="https://target.scene7.com/is/image/Target/GUEST_35aedf3e-a791-438d-9d4a-6c06f193a4a8?fmt=webp&qlt=80&wid=600"
              alt=""
            />
            <h1>Statement styles are having a comeback</h1>
            <p>Chunky jewelry, oversized shades & bedazzled bags are bringing back all the 2010s nostalgia.</p>
          </a>
        </div>
      </div>
    </>
  )
}

export default Middle2