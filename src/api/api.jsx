import axios from "axios";

const URL = "https://disease-predictor-backend.herokuapp.com";

export const register_user = (data) => axios.post(`${URL}/register/`, data);
// Body -
// {
//     "email": "abcd@gmail.com",
//     "uid": "gvewhbdft67er3b2"
// }
// Response -
// Success - "Student Registered Successfully" (201)
// Failure - "Unable to register" (400)

export const predict_diabetes_8 = (data, uid) =>
  axios.post(`${URL}/diabetes/predict8/?uid=${uid}`, data);
// Body -
// {
//     "pregnancies": 1,
//     "glucose": 1,
//     "bp": 2,
//     "skin_thickness": 5,
//     "insulin": 6,
//     "bmi": 2,
//     "dp_function": 3,
//     "age": 4
// }
// Response -
// {
//     "RandomForestNormal": 1,
//     "RandomForestUnskewed": 1,
//     "KNNUnskewed": 0,
//     "Ones": 2
// }

export const predict_diabetes_4 = (data, uid) =>
  axios.post(`${URL}/diabetes/predict4/?uid=${uid}`, data);
// Body -
// {
//     "glucose": 1,
//     "bmi": 2,
//     "dp_function": 3,
//     "age": 4
// }
// Response -
// {
//     "GBM": 1,
//     "RandomForestNormal": 1,
//   "RandomForestUnskewed": 0,
//     "KNNUnskewed": 1,
//   "Ones": 3
// }

export const predict_pneumonia = (data, uid) =>
  axios.post(`${URL}/pneumonia/predict/?uid=${uid}`, data);
// Body -
// {
//     "base64Image": "data:image/png;base64,iVBORw0KGg"
// }
// Response -
// {
//     "Prediction": 0,
//     "Accuracy": 0.9876130819320679
// }
// Prediction: 0 // No pneumonia
// Prediction: 1 // Have Pneumonia

export const past_records_diabetes = (data) =>
  axios.post(`${URL}/diabetesRecords/`, data);
// Body -
// {
//     "uid": "gvewhbdft67er3b2"
// }
// Response -
// [
//     {
//         "date": "25-04-2021",
//         "input": {
//             "age": 44,
//             "bmi": 2.0,
//             "bp": 82,
//             "dp_function": 35.0,
//             "glucose": 165,
//             "insulin": 6,
//             "pregnancies": 1,
//             "skin_thickness": 54
//         },
//         "result": {
//             "KNNUnskewed": "Yes",
//             "Prediction": "have diabetes",
//             "RandomForestNormal": "Yes",
//             "RandomForestUnskewed": "Yes"
//         }
//     }
// ]
// When no data - []

export const single_record_diabetes = (data, id) =>
  axios.post(`${URL}/singleDiabetesRecord/?id=${id}`, data);

export const single_record_pneumonia = (data, id) =>
  axios.post(`${URL}/singlePneumoniaRecord/?id=${id}`, data);

export const past_records_pneumonia = (data) =>
  axios.post(`${URL}/pneumoniaRecords/`, data);
// Body -
// {
//     "uid": "gvewhbdft67er3b2"
// }
// Response -
// [
//     {
//         "date": "25-04-2021",
//         "input": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgK”,
//   "result": {
//             "Accuracy": "1.8119395e-05",
//             "Prediction": "have pneumonia"
//         }
//     }
// ]
// When no data - []
