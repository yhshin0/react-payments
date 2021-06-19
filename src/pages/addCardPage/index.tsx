import React from 'react';
import { PageHeader } from '../../components/pageHeader';
import { AddCardForm } from '../../components/addCardForm';

export const AddCardPage = () => {
  return (
    <>
      <PageHeader hasBackButton title="카드 추가" />
      <AddCardForm />
    </>
  );
};
