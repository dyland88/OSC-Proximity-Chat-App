import React, {useState} from 'react';
import { View, Text, StyleSheet, SafeAreaView, Switch} from 'react-native'; // And all other imports
import SafeAreaWrapper from '../Common/SafeAreaWrapper'; // Import the SafeAreaWrapper component
import { ChatSendButton } from '../Common/CustomButtons'; // Import the ChatSendButton component
import { ChatInput } from '../Common/CustomInputs'; // Import the ChatInput component

const CustomScreen : React.FC = () => {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(!isEnabled)

    function toogleSwitch() {
        setIsEnabled(!isEnabled)
    }


    return (
        <SafeAreaWrapper>
            <View style={styles.container}>
                <Text style={styles.hellotext}>Hello World</Text>
                <Text>More text</Text>
                
            </View>
            <Switch style={styles.switch}
                onValueChange={toggleSwitch}
                value={isEnabled}
            />

            <View style={styles.chatElements}>
                <ChatInput />
                <ChatSendButton />
            </View>
            
        </SafeAreaWrapper>
    );
};

const styles = StyleSheet.create({
    // Styles
    chatElements: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-evenly',
    },

    container: {
        backgroundColor: 'pink',
    },


    hellotext: {
        fontSize: 24,
        fontWeight: 'bold',
    
    },

    moretext: {
        fontSize: 18,
    },

    switch: {
        margin: 15,
        borderRadius: 5,
        borderColor: 'black',
    }

});

export default CustomScreen; // Good for standalone components/Screens