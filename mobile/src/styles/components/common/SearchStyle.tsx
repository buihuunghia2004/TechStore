import { StyleSheet } from "react-native";
import { colors } from "~/styles/colors";
import { inputTextStyle, textStyles } from "~/styles/globalStyles";

export const SearchStyle = StyleSheet.create({
    container:{
        flex:1,
    },
    searchContainer:{
        ...inputTextStyle.search,
        flexDirection:'row',
        justifyContent:'space-between',
        maxHeight:40,
    },
    input:{
        ...textStyles.body_sm,
        flex:1,
        textAlign: 'left',
        color:colors.primary
    },
    buttonBack:{
        marginRight:10
    },
})