import React, { useState } from 'react';
import {SafeAreaView,
    Text,
    StyleSheet,
    View,
    ScrollView,
    FlatList,
    Switch,


} from 'react-native'; // And all other imports


// props to pass into settings
type SettingsProps = {
    id: string,
    title: string,
}

// Switch toggle attribute and function

// List of settings items
const settings = [
    {
        id: '1',
        title: 'Dark Mode',
    },
    {
        id: '2',
        title: 'Notifications',
    },
    {
        id: '3',
        title: 'Privacy',
    },
    {
        id: '4',
        title: 'About',
    },
    {
        id: '5',
        title: 'Log Out',
    },

]

const SettingsScreen : React.FC = () => {

const [isEnabled, setIsEnabled] = useState(false);
const toggleSwitch = () => setIsEnabled(!isEnabled)

/*

// takes in the value of id and returns everything in the parenteses
const handleToggle = (id) => ({

    // sets the value of previous state to the contents of prevState except the value that matches the key [id] is changed to the opposite of its current value
    setIsEnabled((prevState) => ({
        ...prevState,
        [id]: !prevState[id]
    
    }))
})

*/

const SettingsItem = ({id, title}: SettingsProps) => (
    <View style={styles.settingsElement}>
        <Text style={styles.settingsText}> {title} </Text>
        <Switch style={styles.switch}
                //onValueChange={handleChange}
                onValueChange={toggleSwitch}
                value={isEnabled}
            />

    </View>
)


    return (
            <FlatList
            data={settings}
            renderItem={({item}) => <SettingsItem title={item.title} id={item.id}/>}
            keyExtractor={item => item.id}
            />
    )
};

const styles = StyleSheet.create({
    // Styles
    container: {
        width: "100%",
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        color: 'white',

    },
    settingsElement: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 7,
        marginTop: 7,
        paddingRight: 10,
        paddingLeft: 10,
        color: 'white',
        alignItems: 'stretch',
        justifyContent: 'space-between',
    },

    settingsText: {
        fontSize: 24,
    },

    switch: {

    }
});

export default SettingsScreen; // Good for standalone components/Screens