import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Input } from '../../components/input';
import { InputSection } from '../../components/inputSection';
import { InputSectionLabel } from '../inputSectionLabel';
import { InputBox } from '../inputBox';
import { WarningDiv } from '../warningDiv';
import { PageBody } from '../pageBody';

export const AddCardForm = () => {
  const [cardNum, setCardNum] = useState(Array(4).fill(''));
  const [cardNumErrMsg, setCardNumErrMsg] = useState('');
  const [validState, setValidState] = useState(true);

  const handleCardNumChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCardNumErrMsg('');
    setValidState(true);
    const { name, value } = event.target as HTMLInputElement;
    const cardNumTemp = Array.from(cardNum);
    cardNumTemp[Number(name)] = value;
    setCardNum(cardNumTemp);
    cardNumTemp.forEach((val) => {
      if (val.search(/[^\d]/g) !== -1) {
        setCardNumErrMsg('올바르지 않은 숫자가 입력되었습니다.');
        setValidState(false);
      }
      if (val.length !== 4) {
        setCardNumErrMsg('카드 번호는 16자리의 숫자여야 합니다.');
        setValidState(false);
      }
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validState) {
      alert('카드 정보가 올바르지 않습니다.');
      return;
    }
    console.log('submit');
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <PageBody className="page-body">
        <section className="card-section">
          <div>{cardNum}</div>
        </section>
        <InputSection className="input-section">
          <InputSectionLabel title="카드 번호" />
          <InputBox>
            <Input onChange={(e) => handleCardNumChange(e)} type="text" name="0" minLength="4" maxLength="4" />
            <Input onChange={(e) => handleCardNumChange(e)} type="text" name="1" minLength="4" maxLength="4" />
            <Input onChange={(e) => handleCardNumChange(e)} type="text" name="2" minLength="4" maxLength="4" />
            <Input onChange={(e) => handleCardNumChange(e)} type="password" name="3" minLength="4" maxLength="4" />
          </InputBox>
          <WarningDiv className="warning-div" warningMsg={cardNumErrMsg} />
        </InputSection>
        <section className="input-section">
          <div>
            <p>만료일</p>
          </div>
          <div>
            <input /> / <input />
          </div>
          <div className="warning-div"></div>
        </section>
        <section className="input-section">
          <div>
            <p>카드 소유자 이름 (선택)</p>
            <p>
              <span>0</span> / 30
            </p>
          </div>
          <div>
            <input />
          </div>
          <div className="warning-div"></div>
        </section>
        <section className="input-section">
          <div>
            <p>보안 코드(CVC/CVV)</p>
          </div>
          <div>
            <input />
          </div>
          <div className="warning-div"></div>
        </section>
        <section className="input-section">
          <div>
            <p>비밀 번호</p>
          </div>
          <div>
            <input />
            <input />
            <input />
            <input />
          </div>
          <div className="warning-div"></div>
        </section>
        <button>다음</button>
      </PageBody>
    </form>
  );
};
