import { StyleSheet } from "react-native";
import { colors } from "~/styles/colors";
import { textStyles } from "~/styles/globalStyles";

export const AppButtonStyle = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        maxHeight:40,
    },
    text:{
        ...textStyles.button_lg,
        marginHorizontal:8,
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