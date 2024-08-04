import { StyleSheet } from "react-native";
import { colors } from "~/styles/colors";
import { spacing } from "~/styles/dimensions";
import { iconStyles, textStyles } from "~/styles/globalStyles";

export const HamburgerMenuStyle = StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        height:40,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'
    },
    text:{
        ...textStyles.body_lg,
        color:colors.primary
    },
    textBlue:{
        ...textStyles.body_lg,
        color:colors.gray444444
    },
    itemContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: spacing.small,
        paddingHorizontal:spacing.smallMedium
    },
    button:{
        flex:1,
        backgroundColor:'red',
        width:'100%',
        alignItems: 'center',alignContent:'flex-end',
        flexDirection: 'row',
    },
    icon:{
        ...iconStyles.icon24,
        marginRight:0
    }

})