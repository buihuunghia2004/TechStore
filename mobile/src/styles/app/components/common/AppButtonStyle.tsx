import { StyleSheet } from "react-native";
import { buttonStyles, textStyles } from "~/styles/globalStyles";

export const AppButtonStyle = StyleSheet.create({
    container:{
        ... buttonStyles.solid,
        flex:1,
        flexDirection:'row',
        maxHeight:40,
    },
    text:{
        ...textStyles.button_lg,
        marginHorizontal:8
    }
})