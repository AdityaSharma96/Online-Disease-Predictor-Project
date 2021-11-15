# ONLINE HEALTH DISEASE PREDICTOR AND ANALYZER

<br>
<div align="center">

<img src="https://img.shields.io/badge/frontend-React-blue?style=for-the-badge">

<img src="https://img.shields.io/badge/frontend-Django-brightgreen?style=for-the-badge">

<img src="https://img.shields.io/badge/Models-Random Forest Classifier, KNN, CNN-blueviolet?style=for-the-badge">

</div>
<br>

## PACKAGES / MODULES USED

- Python
  > pandas, seaborn, numpy, matplotlib, openCV.
- Machine Learning
  > Random Forest Classifier, KNN, Logistic Regression, SVM, CNN.
- Evaluation Metric
  > Confusion matrix, Classification report.

## TECHNOLOGY STACK

- Frontend
  - React, react-router-dom, recharts.
- Backend
  - Django, Rest API.

## PROBLEM STATEMENT

- We intend to create a system to predict diseases using deep learning along with a health analyzer to maintain the report of the patient.

- Disease Prediction system based on predictive modeling predicts the disease of the user based on the symptoms that user provides as an input to the system.


## FIREBASE FILE
You can download this files from Firebase after you make your project. Most of the fields will be already filled you have to get you API key and put it in the `apiKey` field.
```javascript
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "Your API key",
  authDomain: "Your authDomain",
  databaseURL: "Your databaseURL",
  projectId: "Your projectId",
  storageBucket: "Your storageBucket",
  messagingSenderId: "Your messagingSenderId",
  appId: "Your appId"
  measurementId: "Your measurementId",
};

firebase.initializeApp(firebaseConfig);

// provider
export const firebase_provider = new firebase.auth.GoogleAuthProvider();

// auth
export const auth = firebase.auth();

// firestore
export const firestore = firebase.firestore();
```

## MEMBERS

| Roll No. | Name               |
| -------- | ------------------ |
| 57       | Nikeshsingh Baghel |
| 64       | Prathamesh Channe  |
| 69       | [Rishabh Rathi](https://rishabhrathi22.github.io/)      |
| 75       | [Shreyas Barve](https://shreyasbarve.github.io/)      |
| 88       | Aditya Sharma      |
