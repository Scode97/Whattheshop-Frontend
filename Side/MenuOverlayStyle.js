import { StyleSheet, Dimensions } from 'react-native';
import SideMenu from "../components/SideMenu";

let width = Dimensions.get('window').width
let height = Dimensions.get('window').height

export default styles = StyleSheet.create({
    overlay: {
        backgroundColor: "black",
        position : 'absolute',
        left: 0,
        top: 0,
        width : width,
        height : height,
        paddingTop : 10,
        paddingLeft : 10,
        paddingRight : 10,
        paddingBottom : 10
    }
});
