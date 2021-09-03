import React from 'react';
import { SpecialtyCard } from '~/components/molecules';
import { List } from './styles';

type Data = {
  id: number;
  title: string;
};

const MOCKDATA: Array<Data> = [
  {
    id: 1,
    title: 'Cardiologista',
  },
  {
    id: 2,
    title: 'Dentista',
  },
  {
    id: 3,
    title: 'Nutricionista',
  },
  {
    id: 4,
    title: 'Pediatra',
  },
  {
    id: 5,
    title: 'Geriatra',
  },
  {
    id: 6,
    title: 'Otorrino',
  },
];

export const SpecialtiesList = () => {
  const renderItem = ({ item }) => <SpecialtyCard text={item.title} />;
  return (
    <List
      horizontal
      data={MOCKDATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};
