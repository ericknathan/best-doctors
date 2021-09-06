import React from 'react';
import { BaseContainer } from '~/components/atoms';
import { List } from './styles';
import { DoctorCard } from '~/components/molecules';
import { Doctor } from '~/types';

const MOCKDATA: Array<Doctor> = [
  {
    id: 0,
    name: 'Dr. Anne Shark',
    specialty: 'Nutricionista',
    avatar:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    rating: 4.7,
  },
  {
    id: 1,
    name: 'Dr. Jacob Jones',
    specialty: 'Neurologista',
    avatar:
      'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    rating: 4.2,
  },
  {
    id: 2,
    name: 'Dr. Savannah Nguyen',
    specialty: 'Psicólogo',
    avatar:
      'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
    rating: 3.9,
  },
  {
    id: 3,
    name: 'Dr. Jane Cooper',
    specialty: 'Endocrinologista',
    avatar:
      'https://images.unsplash.com/photo-1623854767648-e7bb8009f0db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    rating: 3.4,
  },
  {
    id: 4,
    name: 'Dr. Marvin McKinney',
    specialty: 'Cardiologista',
    avatar:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    rating: 4.5,
  },
];

export const DoctorsList = () => {
  return (
    <List
      data={MOCKDATA}
      renderItem={({ item }) => <DoctorCard doctor={item} />}
      keyExtractor={item => item.id.toString()}
      ItemSeparatorComponent={() => <BaseContainer h={16} />}
    />
  );
};
