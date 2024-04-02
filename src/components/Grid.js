// import React from 'react';
// import CardsSlider from './CardsSlider';

// // const data = [
// //   ['Row 1, Column 1', 'Row 1, Column 2', 'Row 1, Column 3'],
// //   ['Row 2, Column 1', 'Row 2, Column 2', 'Row 2, Column 3'],
// //   ['Row 3, Column 1', 'Row 3, Column 2', 'Row 3, Column 3'],
// // ];
// const data = [[<p class="text-gradientTest tracking-wide font-poppins text-[22px] sm:text-[32px] lg:text-[42px] font-semibold">What Our Clients Are Saying...</p>,<CardsSlider/>]];

// const Grid = () => {
//   return (
//     <div style={{ display: 'grid',backgroundColor:'white', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
//       {data.map((row, rowIndex) => (
//         <React.Fragment key={rowIndex}>
//           {row.map((cell, cellIndex) => (
//             <div key={cellIndex} style={{ padding: '1rem', border: '1px solid #ccc' }}>{cell}</div>
//           ))}
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }

// export default Grid;
import React from 'react';
import Component1 from './Writencontent';
// import Component2 from './Writencontent';
import Cars from './Cars';

function ComponentArray() {
  const rowData = [
    { component1: <Component1 />, component2: <Cars />, backGroundColor: 'WHITE' },
    { component1: <Component1 />, component1: <Cars />, backGroundColor: 'black' },
    // Add more rows as needed
  ];

  return (
    <div>
      {rowData.map((row, index) => (
        <div key={index} style={{ display: 'flex', backgroundColor: row.backGroundColor }}>
          <div style={{ flex: 1 }}>{row.component1}</div>
          <div style={{ flex: 1 }}>{row.component2}</div>
        </div>
      ))}
    </div>
  );
}

export default ComponentArray;