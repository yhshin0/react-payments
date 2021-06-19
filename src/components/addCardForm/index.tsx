import React from 'react';

export const AddCardForm = () => {
  return (
    <form>
      <div className="page-body">
        <section className="card-section">
          <div>cardNum</div>
        </section>
        <div className="input-section">
          <div>
            <p>카드 번호</p>
          </div>
          <div>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="password" />
          </div>
          <div className="warning-div">cardNumErrMsg</div>
        </div>
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
      </div>
      <button>다음</button>
    </form>
  );
};
