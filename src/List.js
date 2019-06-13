import React from "react";

const orderList = list => [
  ...list
    .filter(img => img.width >= img.height)
    .sort((a, b) => a.height - b.height),
  ...list
    .filter(img => img.width < img.height)
    .sort((a, b) => a.height - b.height)
];

const List = ({ list, styles }) => (
  <article>
    {orderList(list).map(item => (
      <figure key={item.id}>
        <img src={item.url} alt="" style={styles} />
      </figure>
    ))}
  </article>
);

export default List;
