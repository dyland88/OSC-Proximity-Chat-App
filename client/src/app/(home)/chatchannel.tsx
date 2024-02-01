import React from 'react'
import { Stack } from 'expo-router';
import ChatScreen from '../../components/Chat/ChatScreen'
import CustomScreen from '../../components/Chat/CustomScreen';
import SafeAreaWrapper from '../../components/Common/SafeAreaWrapper';


const ChatroomPage = () => {
    return (
      <SafeAreaWrapper>
        
        <CustomScreen />
      </SafeAreaWrapper>
      );
}

export default ChatroomPage