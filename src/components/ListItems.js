import React from 'react';
function ListItems(props) {
  return (
    <li
      className={`d-flex flex-row list-group-item fw-bol justify-content-between align-items-center text-white ${
        props.item.isDone
          ? 'bg-success text-decoration-line-through'
          : 'bg-danger'
      }`}
    >
      <span className="w-100" onClick={() => props.updateItem()}>
        {props.item.value}
      </span>
      <button
        type="button"
        className="btn text-white text-decoration-none"
        onClick={() => props.deleteItem()}
      >
        x
      </button>
    </li>
  );
}

export default ListItems;
