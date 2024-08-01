import { StyleSheet } from "react-native";
import { textStyles } from "~/styles/globalStyles";

export const CheckBoxStyle = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        height:24,
        width:100
    },
    text:{
        ...textStyles.body_lg,
        marginLeft:16,
    }
})