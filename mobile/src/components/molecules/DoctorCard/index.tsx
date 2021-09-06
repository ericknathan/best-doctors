import React from 'react';
import { AirbnbRating } from 'react-native-ratings';
import { BaseTouchContainer, Avatar, BaseText } from '~/components/atoms';
import { AvatarContainer, TextContainer, RatingContainer } from './styles';
import { Doctor } from '~/types';

export const DoctorCard = ({ doctor }: { doctor: Doctor }) => {
  return (
    <BaseTouchContainer direction="row" h={100} bg="white" br={16} w={328}>
      <AvatarContainer>
        <Avatar source={{ uri: doctor.avatar }} />
      </AvatarContainer>
      <TextContainer>
        <BaseText fontFamily="bold">{doctor.name}</BaseText>
        <BaseText color="grey" fontSize={12} mb={12}>
          {doctor.specialty}
        </BaseText>
        <RatingContainer>
          <AirbnbRating
            size={14}
            showRating={false}
            isDisabled
            defaultRating={doctor.rating}
          />
          <BaseText ml={6} color="grey" fontSize={10}>
            ({doctor.rating})
          </BaseText>
        </RatingContainer>
      </TextContainer>
    </BaseTouchContainer>
  );
};
