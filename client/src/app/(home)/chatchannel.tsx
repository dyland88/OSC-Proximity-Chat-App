import React from 'react'
import { Stack } from 'expo-router';
import ChatScreen from '../../components/Chat/ChatScreen'
import CustomScreen from '../../components/Chat/CustomScreen';
import SettingsScreen from '../../components/Chat/SettingsScreen';
import SafeAreaWrapper from '../../components/Common/SafeAreaWrapper';


const ChatroomPage = () => {
    return (
      <SafeAreaWrapper>
        
        <SettingsScreen />
      </SafeAreaWrapper>
      );
}

export default ChatroomPage