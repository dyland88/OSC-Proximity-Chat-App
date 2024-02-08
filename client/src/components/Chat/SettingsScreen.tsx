import React from 'react';
import {SafeAreaView,
    Text,
    StyleSheet,
    View,
    ScrollView,
    FlatList,


} from 'react-native'; // And all other imports

type SettingsProps = {
    title: string,
}

// Any logic should be right above the component
const SettingsItem = ({title}: SettingsProps) => (
    <View style={styles.settingsElement}>
        <Text style={styles.settingsText}> {title} </Text>

    </View>
)

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
    return (
            <FlatList
            data={settings}
            renderItem={({item}) => <SettingsItem title={item.title}/>}
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
        flexDirection: 'column',
        padding: 5,
        color: 'white',
    },
    settingsText: {
        fontSize: 24,
    }
});

export default SettingsScreen; // Good for standalone components/Screens