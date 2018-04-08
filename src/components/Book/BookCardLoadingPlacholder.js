import React from 'react';
import ContentLoader from 'react-content-loader';

const BookCardLoadingPlaceholder = props => (
  <li>
    <ContentLoader {...props} width={140} height={250} className="book">
      <rect x="0" width="128" height="193" />
      <rect y="200" width="110" height="10" />
      <rect y="215" width="100" height="10" />
    </ContentLoader>
  </li>
);

export default BookCardLoadingPlaceholder;
