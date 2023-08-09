import React from 'react';
import Rules from './src/pages/Rules';
import Start from './src/pages/Start';
import { StatusBar } from 'react-native';

export default function App() {
  return (    
   <>
      <StatusBar color="light" />
     <Rules />
   </>
  );
};