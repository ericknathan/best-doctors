import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { DoctorCard } from './index';
import { Container } from '../../atoms/Container';

const story = storiesOf('DoctorCard', module);

story.addDecorator(getStory => <Container>{getStory()}</Container>);

story.add('Standard', () => (
  <DoctorCard
    doctor={{
      name: 'Dr. John Doe',
      specialty: 'Cardiologista',
      avatar:
        'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      rating: 4.5,
    }}
  />
));
