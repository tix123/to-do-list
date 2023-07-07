import { StyleSheet, Text, View } from 'react-native';

const Banner = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>To Do List</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#aaa',
        paddingHorizontal: 30,
    },
    title: {
        fontSize: 40,
    }
});

export default Banner