import React, {useState} from 'react';
import { View, Text, StyleSheet, SafeAreaView, Switch} from 'react-native'; // And all other imports

// Any logic should be right above the component

const CustomScreen : React.FC = () => {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(!isEnabled)

    function toogleSwitch() {
        setIsEnabled(!isEnabled)
    }


    return (
        <SafeAreaView style = {styles.wrapper}>
            <View style={styles.container}>
                <Text style={styles.hellotext}>Hello World</Text>
                <Text>More text</Text>
            </View>
            <Switch style={styles.switch}
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    // Styles
    container: {
        backgroundColor: 'pink',
    },

    wrapper: {
        backgroundColor: 'lightblue',
        flex: 1,
        alignItems: 'center'
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