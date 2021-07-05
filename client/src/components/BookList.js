/** @format */

import React from "react";
import { useQuery, gql } from "@apollo/client";

const getBooksQuery = gql`
  {
    books {
      id
      name
    }
  }
`;

function BookList() {
  const { loading, error, data } = useQuery(getBooksQuery);
  console.log(data)
  return (
    <div>
      <ul id="book-list">
        <li>Book name</li>
      </ul>
    </div>
  );
}

export default BookList;
