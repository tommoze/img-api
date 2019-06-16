import React from "react";

const List = ({ list, styles }) => (
  <article>
    {list.map(item => (
      <figure key={item.id}>
        <img src={item.url} alt="" style={styles} />
      </figure>
    ))}
  </article>
);

export default List;
