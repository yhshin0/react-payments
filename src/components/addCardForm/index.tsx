import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Input } from '../../components/input';
import { InputSection } from '../../components/inputSection';
import { InputSectionLabel } from '../inputSectionLabel';
import { InputBox } from '../inputBox';
import { WarningDiv } from '../warningDiv';
import { PageBody } from '../pageBody';

export const AddCardForm = () => {
  const [validState, setValidState] = useState(false);
  const [cardNum, setCardNum] = useState(Array(4).fill(''));
  const [cardNumErrMsg, setCardNumErrMsg] = useState('');
  const [expDate, setExpDate] = useState({ month: '', year: '' });
  const [expDateErrMsg, setExpDateErrMsg] = useState('');

  const handleCardNumChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;
    const cardNumTemp = Array.from(cardNum);
    setCardNumErrMsg('');
    setValidState(true);
    cardNumTemp[Number(name)] = value;
    setCardNum(cardNumTemp);
    cardNumTemp.forEach((val) => {
      if (val.search(/[^\d]/g) !== -1) {
        setCardNumErrMsg('숫자만 입력할 수 있습니다.');
        setValidState(false);
        return;
      }
      if (val.length !== 4) {
        setCardNumErrMsg('카드 번호는 16자리의 숫자여야 합니다.');
        setValidState(false);
        return;
      }
    });
  };

  const handleExpDateBlur = async (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    let value = event.target.value;
    setExpDateErrMsg('');
    setValidState(true);
    if (value.search(/[^\d]/g) !== -1) {
      setExpDateErrMsg('숫자만 입력할 수 있습니다.');
      setValidState(false);
      setExpDate({ ...expDate, [name]: value });
      return;
    }
    if (name === 'month') {
      if (Number(value) !== 0 && value.length === 1) {
        value = '0' + value;
        event.target.value = value;
      }
      setExpDate({ ...expDate, [name]: value });
      if (Number(value) <= 0 || Number(value) >= 13) {
        setExpDateErrMsg('만료일은 1~12월 사이여야 합니다.');
        setValidState(false);
        return;
      }
      let year = expDate['year'];
      year = year === '' ? '00' : year.length === 1 ? '0' + year : year;
      const expFullDate = new Date('20' + year + '/' + value);
      const currentDate = new Date();
      const diffCurrAndExpDate =
        (expFullDate.getFullYear() - currentDate.getFullYear()) * 12 +
        (expFullDate.getMonth() - currentDate.getMonth());
      if (diffCurrAndExpDate <= 0 || diffCurrAndExpDate > 60) {
        setExpDateErrMsg('만료일은 5년 이내여야 합니다.');
        setValidState(false);
        return;
      }
    }
    if (name === 'year') {
      setExpDate({ ...expDate, [name]: value });
      if (Number(expDate['month']) === 0) {
        setExpDateErrMsg('만료일은 1~12월 사이여야 합니다.');
        setValidState(false);
        return;
      }
      value = value === '' ? '00' : value.length === 1 ? '0' + value : value;
      const expFullDate = new Date('20' + value + '/' + expDate['month']);
      const currentDate = new Date();
      const diffCurrAndExpDate =
        (expFullDate.getFullYear() - currentDate.getFullYear()) * 12 +
        (expFullDate.getMonth() - currentDate.getMonth());
      if (diffCurrAndExpDate <= 0 || diffCurrAndExpDate > 60) {
        setExpDateErrMsg('만료일은 5년 이내여야 합니다.');
        setValidState(false);
        return;
      }
    }
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
    <PageBody className="page-body">
      <form onSubmit={(e) => handleSubmit(e)}>
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
        <InputSection className="input-section">
          <InputSectionLabel title="만료일" />
          <InputBox>
            <Input
              onBlur={(e) => {
                handleExpDateBlur(e);
              }}
              type="text"
              name="month"
              minLength="2"
              maxLength="2"
              placeholder="MM"
            />
            <span>/</span>
            <Input
              onBlur={(e) => {
                handleExpDateBlur(e);
              }}
              type="text"
              name="year"
              minLength="2"
              maxLength="2"
              placeholder="YY"
            />
          </InputBox>
          <WarningDiv className="warning-div" warningMsg={expDateErrMsg} />
        </InputSection>
        <section className="input-section">
          <div>
            <span>카드 소유자 이름 (선택)</span>
            <span>
              <span>0</span> / 30
            </span>
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
      </form>
    </PageBody>
  );
};
