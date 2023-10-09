import throttle from 'lodash.throttle';

const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');
const form = document.querySelector('form');
const FEEDBACK_DATA = 'feedback-form-state';
let feedbackData = JSON.parse(localStorage.getItem(FEEDBACK_DATA)) || {};

const getData = () => {
  email.value = feedbackData.email || '';
  message.value = feedbackData.message || '';
};

getData();

const onSubmit = e => {
  e.preventDefault();
  console.log(feedbackData);

  localStorage.removeItem(FEEDBACK_DATA);
  e.currentTarget.reset();
  feedbackData = {};
};
const updateFeedbackData = function (e) {
  feedbackData[e.target.name] = e.target.value;
  localStorage.setItem(FEEDBACK_DATA, JSON.stringify(feedbackData));
};

form.addEventListener('input', throttle(updateFeedbackData, 500));
form.addEventListener('submit', onSubmit);
