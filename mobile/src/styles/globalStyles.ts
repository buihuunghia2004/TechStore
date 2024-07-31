import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { borderRadius, cardElevation, screenPadding, spacing } from "./dimensions";


export const textStyles = {
  h1: {
    fontFamily: 'Inter',
    fontSize: 24,
    fontStyle:'normal',
    fontWeight:'500',
  },
  h2: {
    fontFamily: 'Inter',
    fontSize: 20,
    fontStyle:'normal',
    fontWeight:'500',
  },
  h3: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle:'normal',
    fontWeight:'500',
    lineHeight: 24,
  },
  h4: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontStyle:'normal',
    fontWeight:'500',
  },
  body_sm: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontStyle:'normal',
    fontWeight:'300',
  },
  body_md: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontStyle:'normal',
    fontWeight:'300',
  },
  button_lg: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontStyle:'normal',
    fontWeight:'400',
  },
  caption:{
    fontFamily: 'Inter',
    fontSize: 12,
    fontStyle:'normal',
    fontWeight:'500',
  }
};

export const buttonStyles = {
  solid: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.medium,
    paddingVertical: spacing.small,
    paddingHorizontal: spacing.small,
    alignItems: 'center',
  },
  outline: {
    borderRadius: borderRadius.medium,
    borderWidth: 1,
    borderColor: colors.primary,
    paddingVertical: spacing.small,
    paddingHorizontal: spacing.medium,
    alignItems: 'center',
  },
  text: textStyles.button_lg
};

export const iconStyles = {
  icon14: { 
    width: 14,
    height: 14,
  },
  icon16: {
    width: 16, 
    height: 16,
  },
  icon24: {
    width: 24, 
    height: 24,
  },
  icon32: {
    width: 32, 
    height: 32,
  },
  icon40: {
    width: 40, 
    height: 40,
  },
}

export const containerStyles = {
  container: {
    flex: 1,
  },
  containerRow: {
    flex:1,
    flexDirection: 'row',
  },
  containerCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen: {
    flex: 1,
    padding: screenPadding.medium,
    backgroundColor: colors.background,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: borderRadius.medium,
    padding: spacing.medium,
    marginVertical: spacing.small,
    elevation: cardElevation.medium,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
};

export const globalStyles = StyleSheet.create({
  line: {
    flex: 1,
    maxHeight: 1,
    backgroundColor: colors.gray2D2D2D,
  }
});
