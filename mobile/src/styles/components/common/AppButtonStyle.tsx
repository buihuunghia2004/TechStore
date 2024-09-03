import { StyleSheet } from "react-native";
import { colors } from "~/styles/colors";
import { textStyles } from "~/styles/globalStyles";

export const AppButtonStyle = StyleSheet.create({
    container:{
        flexDirection:'row',
        height:40,
    },
    text:{
        ...textStyles.button_lg,
        marginHorizontal:8,
        color:'white'
    },
    textOutline:{
        ...textStyles.button_lg,
        marginHorizontal:8,
        color:colors.primary
    },
    disabled:{
        opacity:0.5
    }
})