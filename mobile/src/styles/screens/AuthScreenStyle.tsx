import { StyleSheet } from "react-native";
import { textStyles } from "../globalStyles";
import { colors } from "../colors";

export const AuthScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
      },
      textLogo: {
        ...textStyles.h1,
        color: colors.primary400,
        textAlign: 'center',
        marginBottom: 24,
      },
      textTitle: {
        ...textStyles.h2,
        marginTop: 40,
        color: 'black',
        textAlign: 'center',
        marginBottom: 24,
      },
      inputContainer: {
        justifyContent: 'space-between',
      },
      checkBoxContainer: {
        flexDirection: 'row',
        marginTop: 24,
        marginBottom: 16,
        gap: 4,
      },
      checkBoxText: {
        ...textStyles.body_sm,
        color: colors.gray717171,
      },
      linkText: {
        ...textStyles.body_sm,
        color: colors.primary,
      },
      linkTextFooter: {
        ...textStyles.body_sm,
        color: colors.primary,
        textDecorationLine: 'underline',
      },
      lineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 24,
        marginBottom: 26,
      },
      inputPositionStyle: {},
})