import { Dimensions, Platform } from 'react-native';
const { height, width } = Dimensions.get('window');

export default {
  
  // Localhost
  // apiSocketUrl: 'http://localhost:3007',
  // apiBaseUrl: 'http://localhost:3007/api/v1',
  // uploadPath: 'http://localhost:3007/ClassPlusImages',

  

  // Live
  apiSocketUrl: 'http://moclass.in:3007',
  apiBaseUrl: 'https://insta-starzz-staging.herokuapp.com/api/v1',
  uploadPath: 'http://moclass.in/ClassPlusImages',

  groupIds: {
    superadmin: '5ed1ed6dae6acd0278cc4b83',
    company: '5ed1ed80ae6acd0278cc4b84',
    admin: '5ed1ed8dae6acd0278cc4b85',
    student: '5ed1ed98ae6acd0278cc4b86',
    author: '5ed1eda6ae6acd0278cc4b87',
    staff: '5ed1edb1ae6acd0278cc4b88',
    driver: '5ed1edbdae6acd0278cc4b89',
  },
  showStatusBar: true,
  title: '',
  width: width,
  height: height,
  platform: Platform.OS,
  googleMap: 'AIzaSyBE5yxQtOi3CNpJqVXrGPWabripQ_8X2m4',
  postTypes: ['video', 'youtube'],
  modeofTraining: [{ id: 'online', name: 'Online' }, { id: 'offline', name: 'Offline' }],
  questionType: [{ id: '0', name: 'Objective (Single Answer)' }, { id: '1', name: 'Fill in the Blanks' }, { id: '2', name: 'Objective (Multiple Answers)' }, { id: '3', name: 'True/False' }],
  leadProgressStatus: {
    'all': ['grid', '#edc452'],
    'today': ['calendar', '#fb6e52'],
    'new': ['new', '#f4b400'],
    'open': ['emoji-sad', '#53a93f'],
    'visit': ['location', '#d73d32'],
    'interested': ['thumbs-up', '#0e96b8'],
    'walking': ['man', '#2dc3e8'],
    'demo done': ['gauge', '#a0d468'],
    'admission done': ['hand', '#776be6'],
    'call back': ['phone', '#e75b8d'],
    'invalid': ['block', '#d73d32'],
    'close': ['box', '#db0f00'],
    'not interested': ['thumbs-down', '#2b4410'],
  },
  leadStatus: {
    'follow up': ['grid', '#edc452'],
    'coming demo': ['calendar', '#fb6e52'],
    'coming admission': ['new', '#f4b400'],
    'adm. done other': ['emoji-sad', '#53a93f'],
    'today call evening': ['gauge', '#d73d32'],
    'time issue': ['thumbs-up', '#0e96b8'],
    'about fees': ['man', '#2dc3e8'],
    'interested': ['gauge', '#a0d468'],
    'not interested': ['hand', '#776be6'],
    'attempted': ['phone', '#e75b8d']
  },
}