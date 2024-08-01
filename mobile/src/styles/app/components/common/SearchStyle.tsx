import { StyleSheet } from "react-native";
import { colors } from "~/styles/colors";
import { inputTextStyle, textStyles } from "~/styles/globalStyles";

export const SearchStyle = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
    },
    searchContainer:{
        ...inputTextStyle.search,
        flexDirection:'row',
        justifyContent:'space-between',
        maxHeight:40
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
    suggestionList: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop:10,
        elevation: 2, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    suggestionItem: {
        padding: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
})