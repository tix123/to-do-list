import { Pressable, StyleSheet, Text, View } from 'react-native';


const FloatingButton = (props) => {
    return (
        <View style={props.style}>
            <Pressable style={styles.button}>

                <Text style={styles.text}>+</Text>

            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    button: {
        backgroundColor: '#aaa',
        width: 75,
        height: 75,
        borderRadius: 75,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 35,
    },
});

export default FloatingButton