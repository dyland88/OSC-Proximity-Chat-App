import React from 'react';
import {SafeAreaView,
    Text,
    StyleSheet,
    View,
    ScrollView,
    FlatList,


} from 'react-native'; // And all other imports

// Any logic should be right above the component

const settingsItems = [
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
            data={settingsItems}
            renderItem={({item}) => (
                <View>
                    <Text>{item.title}</Text>
                    
                </View>
            )}
            />
    )
};

const styles = StyleSheet.create({
    // Styles
});

export default SettingsScreen; // Good for standalone components/Screens