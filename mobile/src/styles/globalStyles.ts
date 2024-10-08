import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { borderRadius, screenPadding, spacing, TabHeight } from "./dimensions";

export const textStyles = StyleSheet.create({
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
  body_xs: {
    fontFamily: 'Inter',
    fontSize: 10,
    fontStyle:'normal',
    fontWeight:'300',
  },
  body_sm: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontStyle:'normal',
    fontWeight:'300',
  },
  body_md: {
    textAlign: 'center',
    fontFamily: 'Inter', 
    fontSize: 14, 
    fontWeight:'200',
  },
  body_lg: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle:'normal',
    fontWeight:'300',
  },
  button_sm:{
    fontFamily: 'Inter',
    fontSize: 12,
    fontStyle:'normal',
    fontWeight:'400',
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
});

export const buttonStyles =StyleSheet.create({
  solid: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.medium,
    paddingVertical: spacing.small,
    paddingHorizontal: spacing.small,
    alignItems: 'center',
    justifyContent:'center'
  },
  outline: {
    borderRadius: borderRadius.medium,
    borderWidth: 1,
    borderColor: colors.primary,
    paddingVertical: spacing.small,
    paddingHorizontal: spacing.small,
    alignItems: 'center',
    justifyContent:'center'
  },
  text: textStyles.button_lg
});
export const inputTextStyle =StyleSheet.create({
  search :{
    borderRadius: borderRadius.small,
    backgroundColor: colors.grayEDEDED,
    paddingHorizontal:spacing.medium,
    alignItems:'center'
  }
})
export const dropDownStyle = StyleSheet.create({
  hambuger:{
    borderRadius: borderRadius.small,
    paddingHorizontal:spacing.smallMedium,
    paddingVertical:spacing.tiny,

  }
})
export const switchStyle = StyleSheet.create({
  switchButton:{
    borderRadius:borderRadius.extraLarge,
    width:48,
    height:24,
  },
})

export const iconStyles = StyleSheet.create({
  icon8:{
    width: 8,
    height: 8,
  },
  icon14: { 
    width: 14,
    height: 14,
  },
  icon16: {
    width: 16, 
    height: 16,
  },
  icon20: {
    width: 20, 
    height: 20,
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
})
export const imageStyle = StyleSheet.create({
  image40:{
    width: 40, 
    height: 40,
  },
  image66:{
    width: 66, 
    height: 66,
  },
  image86_72:{
    width: 86, 
    height: 72,
  },
  image82_59:{
    width: 82, 
    height: 59,
  },
  image62_48:{
    width: 62, 
    height: 48,
  },
  image132_104:{
    width: 132, 
    height: 104,
  },
  image120_134:{
    width: 120, 
    height: 134,
  }
})

export const containerStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerRow: {
    width:'100%',
    flexDirection: 'row',
  },
  containerBetween:{
    width:'100%',
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  containerCenter: {
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
    padding: spacing.small,
    marginVertical: spacing.small,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});

export const globalStyles = StyleSheet.create({
  line: {
    flex:1,
    height: 1,
    backgroundColor: colors.grayB4B4B4,
  },
});
