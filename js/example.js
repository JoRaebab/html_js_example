const nameH1element = document.querySelector('h1.inline');
const connectNameElement = document.querySelector('span.red');
const studentNoElement = document.querySelector('span.studentNo');
const emailElement = document.querySelector('span.email');

const inputModalElement = document.querySelector('#inputModal');

const setUserName = (userName) => {
  nameH1element.textContent = userName;
  connectNameElement.textContent = userName;
};

const setStudentNo = (studentNo) => {
  studentNoElement.textContent = studentNo;
};

const setEmail = (email) => {
  emailElement.textContent = email;
};

const localName = localStorage.getItem('userName');
if (localName) setUserName(localName);

const localStudentNo = localStorage.getItem('studentNo');
if (localStudentNo) setStudentNo(localStudentNo);

const localEmail = localStorage.getItem('email');
if (localEmail) setEmail(localEmail);


nameH1element.onclick = () => {
  inputModalElement.showModal();
  // const inputName = prompt('이름을 입력해 주세요.');
  // if (inputName) {
  //   localStorage.setItem('name', inputName);
  //   setUserName(inputName);
  // } else {
  //   alert('이름이 입력되지 않았습니다.');
  // }
};

const modalSubmitBtn = document.querySelector('button.modalSubmit');

modalSubmitBtn.onclick = () => {
  const modalFormElement = document.querySelector('.modalForm');
  const formData = new FormData(modalFormElement);

  // 새로고침해도 값 유지
  for (const [key, value] of formData) {
    localStorage.setItem(key, value);
    if (key==='userName') setUserName(value);
    if (key==='studentNo') setStudentNo(value);
    if (key==='email') setEmail(value);
  }

  inputModalElement.close();
};

inputModalElement.onclick = (event) => {
  if (event.target.nodeName === 'DIALOG') inputModalElement.close();
};

// eslint-disable-next-line require-jsdoc, no-unused-vars
function handleInputLength(el, max) {
  if (el.value.length > max) {
    el.value = el.value.substr(0, max);
    alert('10자 이상 입력할 수 없습니다.');
  }
}

