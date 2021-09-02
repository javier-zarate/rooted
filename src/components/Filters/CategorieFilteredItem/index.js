import React from 'react';
import { Checkbox } from 'components';
import { CategorieFilteredItemWrapper } from './styles';
import { navigate, useLocation } from '@reach/router';
import queryString from 'query-string';

export function CategorieFilteredItem({ title, id }) {
  const { search } = useLocation();
  const qs = queryString.parse(search);
  const collectionIds = qs.c?.split(',').filter(c => !!c) || [];
  const checked = collectionIds?.find(cId => cId === id);

  const onClick = () => {
    let naviagateTo = '/all-products';
    collectionIds.push(id);

    let newIds = [];

    if (checked) {
      newIds = collectionIds
        .filter(cId => cId !== id)
        .map(cId => encodeURIComponent(cId));
    } else {
      collectionIds.push(id);
      newIds = collectionIds.map(cId => encodeURIComponent(cId));
    }

    if (newIds.length) {
      navigate(`${naviagateTo}?c=${newIds.join(',')}`);
    } else {
      navigate(`${naviagateTo}`);
    }

  };

  return (
    <CategorieFilteredItemWrapper onClick={onClick}>
      <Checkbox checked={checked} />
      <div>{title}</div>
    </CategorieFilteredItemWrapper>
  );
}
